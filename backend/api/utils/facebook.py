import facebook  # sudo pip install facebook-sdk
import itertools
import json
import re
import requests

import requests
import pandas as pd
import json
import os

from nltk.corpus import stopwords
from nltk.stem import PorterStemmer
from nltk import word_tokenize
import string
import pandas as pd

import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

# %matplotlib inline
import os

# Import functions for data preprocessing & data preparation
from sklearn.preprocessing import LabelEncoder
from sklearn.utils import resample
from sklearn.feature_extraction.text import CountVectorizer
from nltk.sentiment.vader import SentimentIntensityAnalyzer

from nltk.tokenize import word_tokenize
from nltk.stem import WordNetLemmatizer
from nltk.stem import PorterStemmer, LancasterStemmer
from nltk.stem.snowball import SnowballStemmer
from nltk.corpus import stopwords
from nltk.corpus import wordnet
import string
from string import punctuation
import nltk
import re


access_token = os.getenv("FB_ACCESS_TOKEN")
nltk.download("omw-1.4")


def get_comments(page_id, post_id):
    url = f"https://graph.facebook.com/v16.0/{post_id}_{page_id}/comments?access_token={access_token}"

    response = requests.request("GET", url)

    # save name, time, message in excel file
    data = json.loads(response.text)
    # return data

    # create object with only name, time, message
    def get_comment(comment):
        return {
            "name": comment["from"]["name"],
            "time": comment["created_time"],
            "message": comment["message"],
        }

    # return data
    excel_data = list(map(get_comment, data["data"]))
    df = pd.DataFrame(excel_data)

    return df


def clean_comments(dataframe: pd.DataFrame):
    snowball_stemer = SnowballStemmer(language="english")
    lzr = WordNetLemmatizer()

    dataframe["cleaned"] = (
        dataframe["message"]
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


def analyse(post_id, page_id):
    df = get_comments(page_id, post_id)
    # return df

    dfc = clean_comments(df)
    dff = test_1(dfc)

    sentiment_counts = dff["sentiments"].value_counts()
    total_comments = sentiment_counts.sum()

    positive_percentage = (sentiment_counts["Positive"] / total_comments) * 100
    negative_percentage = (sentiment_counts["Negative"] / total_comments) * 100
    neutral_percentage = (sentiment_counts["Neutral"] / total_comments) * 100

    dff["time"] = pd.to_datetime(df["time"])

    sorted_dff = df.sort_values(by="time", ascending=False)

    latest_entry = sorted_dff.iloc[0]

    return {
        "positive": positive_percentage,
        "negative": negative_percentage,
        "neutral": neutral_percentage,
        "latest": {
            "message": latest_entry.get("message"),
            "name": latest_entry.get("name"),
        },
    }
