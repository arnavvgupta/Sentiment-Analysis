import os
import pandas as pd
from nltk.sentiment.vader import SentimentIntensityAnalyzer

from nltk.stem import WordNetLemmatizer
from nltk.stem.snowball import SnowballStemmer
from nltk.corpus import stopwords
import string
from string import punctuation
import nltk

from nltk.sentiment.vader import SentimentIntensityAnalyzer
import pandas as pd
from apiclient.discovery import build
import pandas as pd

from nltk.corpus import stopwords
import string

nltk.download("stopwords")
nltk.download("wordnet")
nltk.download("omw-1.4")
nltk.download("vader_lexicon")

api_key = os.getenv("YT_API_KEY")


def analyze(video_id):
    comments = video_comments(video_id)
    return run_model(comments)


def video_comments(video_id):
    raw_data = []
    # creating youtube resource object
    print("Hello1")

    youtube = build("youtube", "v3", developerKey=api_key)

    print("Hello2")

    # retrieve youtube video results
    video_response = (
        youtube.commentThreads()
        .list(part="snippet", videoId=video_id, textFormat="plainText", maxResults=100)
        .execute()
    )
    print("hello3")

    # iterate video response
    while video_response:
        # extracting required info
        # from each result object
        for item in video_response["items"]:
            # Extracting comments
            comment = item["snippet"]["topLevelComment"]["snippet"]["textDisplay"]

            # counting number of reply of comment
            like = item["snippet"]["topLevelComment"]["snippet"]["likeCount"]
            record = []
            record.append(comment)
            record.append(like)
            raw_data.append(record)

        if "nextPageToken" in video_response:
            video_response = (
                youtube.commentThreads()
                .list(
                    part="snippet",
                    videoId=video_id,
                    textFormat="plainText",
                    pageToken=video_response["nextPageToken"],
                    maxResults=100,
                )
                .execute()
            )
        else:
            break

    return raw_data


def clean_comments(dataframe: pd.DataFrame):
    snowball_stemer = SnowballStemmer(language="english")

    lzr = WordNetLemmatizer()

    dataframe["cleaned"] = (
        dataframe["COMMENTS"]
        .str.strip()
        .str.replace("\n", " ")
        .str.replace(r"[^\w\s]+", "", regex=True)
        .str.lower()
        .str.replace(r"#\S+", " ", regex=True)
    )
    stop_words = stopwords.words("english")
    punctuations = list(string.punctuation)
    dataframe["cleaned"] = dataframe["cleaned"].apply(
        lambda comment: " ".join(
            [word for word in comment.split() if word not in stop_words]
        )
    )  # removing stop words
    dataframe["cleaned"] = dataframe["cleaned"].apply(
        lambda comment: " ".join(
            [word for word in comment.split() if word not in punctuation]
        )
    )  # removing punctuations

    dataframe["cleaned"] = dataframe["cleaned"].apply(
        lambda comment: " ".join([lzr.lemmatize(word) for word in comment.split()])
    )  # Lemmatization

    # stemming(not recommended )
    # dataframe["cleaned"]=dataframe["cleaned"].apply(lambda comment :" ".join([snowball_stemer.stem(word) for word in comment.split()]))

    return dataframe


def _get_polarity_score(analyzer: SentimentIntensityAnalyzer, text: str):
    scores = analyzer.polarity_scores(text)
    return scores["compound"]


def _convert_score_to_sentiment(score):
    sentiment = ""

    if score < 0.0:
        sentiment = "Negative"
    elif -0.05 < score <= 0.5:
        sentiment = "Neutral"
    elif score > 0.5:
        sentiment = "Positive"

    return sentiment


def test_1(dataframe: pd.DataFrame):
    analyzer = SentimentIntensityAnalyzer()
    dataframe["score"] = dataframe["cleaned"].apply(
        lambda comment: _get_polarity_score(analyzer, comment)
    )

    dataframe["sentiments"] = dataframe["score"].apply(
        lambda score: _convert_score_to_sentiment(score)
    )

    return dataframe


def run_model(data):
    df = pd.DataFrame(data)
    df.columns = ["COMMENTS", "LIKES"]

    cleaned_comments = clean_comments(df)

    dff = test_1(cleaned_comments)

    sentiment_counts = dff["sentiments"].value_counts()
    total_comments = sentiment_counts.sum()

    positive_percentage = (sentiment_counts["Positive"] / total_comments) * 100
    negative_percentage = (sentiment_counts["Negative"] / total_comments) * 100
    neutral_percentage = (sentiment_counts["Neutral"] / total_comments) * 100

    # Filter the DataFrame by positive sentiment
    positive_comments = df[df["sentiments"] == "Positive"]

    # Get the most liked comment with positive sentiment
    most_liked_positive_comment = positive_comments.loc[
        positive_comments["LIKES"].idxmax(), "COMMENTS"
    ]

    # Filter the DataFrame by negative sentiment
    negative_comments = df[df["sentiments"] == "Negative"]

    # Get the most liked comment with negative sentiment
    most_liked_negative_comment = negative_comments.loc[
        negative_comments["LIKES"].idxmax(), "COMMENTS"
    ]

    return {
        "positive": positive_percentage,
        "negative": negative_percentage,
        "neutral": neutral_percentage,
        "most_liked_negative_comment": most_liked_negative_comment,
        "most_liked_positive_comment": most_liked_positive_comment,
    }


def find_comment(video_id, keyword):
    comments = video_comments(video_id)
    filtered_comments = [k for k in comments if keyword.lower() in k[0].lower()]
    return filtered_comments
