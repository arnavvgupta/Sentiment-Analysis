from django.shortcuts import render
from django.http import JsonResponse

from .utils import yt, insta, facebook
import json
import urllib.parse


def home(request):
    return JsonResponse({"hello": "world"}, safe=False)


def urlAnalyse(request):
    # https://www.youtube.com/watch?v=h3nDMKV8Hns
    link = request.GET.get("link")

    decoded_link = urllib.parse.unquote(link)
    print("link", decoded_link)
    if decoded_link.split("/")[2] == "www.youtube.com":
        video_id = decoded_link.split("/")[3].split("?v=")[1]

        data = yt.analyze(video_id)

        return JsonResponse(data, safe=False)

    if decoded_link.split("/")[2] == "www.instagram.com":
        data = insta.scrap_insta(decoded_link)

        return JsonResponse(data, safe=False)

    data = {"error": "invalid url"}
    return JsonResponse(data, safe=False)


def getComments(request):
    # https://www.youtube.com/watch?v=h3nDMKV8Hns
    link = request.GET.get("link")
    keyword = request.GET.get("keyword")

    decoded_link = urllib.parse.unquote(link)
    print("link", decoded_link)
    video_id = decoded_link.split("/")[3].split("?v=")[1]

    data = yt.find_comment(video_id, keyword)

    return JsonResponse(data, safe=False)


def fbUrlAnalyse(request):
    post_id = request.GET.get("post_id")
    page_id = request.GET.get("page_id")

    data = facebook.analyse(page_id, post_id)

    return JsonResponse(data, safe=False)
