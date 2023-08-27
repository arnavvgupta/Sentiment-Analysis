from instagrapi import Client
import os

username = os.getenv("INSTA_USERNAME")
password = os.getenv("INSTA_PASSWORD")


def scrap_insta(link):
    raw_data = []
    cl = Client()
    cl.login(username, password)
    media_id = cl.media_id(cl.media_pk_from_url(link))

    for i in cl.media_comments(media_id):
        record = []
        record.append(i.text)
        record.append(i.like_count)
        raw_data.append(record)

    return raw_data
