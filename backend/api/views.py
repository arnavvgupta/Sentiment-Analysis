from django.shortcuts import render
from django.http import JsonResponse

from . import utils
import json
import urllib.parse


def home(request):
    return JsonResponse({"hello": "world"}, safe=False)


def urlAnalyse(request):
    # https://www.youtube.com/watch?v=h3nDMKV8Hns
    link = request.GET.get("link")

    decoded_link = urllib.parse.unquote(link)
    print("link", decoded_link)
    video_id = decoded_link.split("/")[3].split("?v=")[1]

    data = utils.analyze(video_id)

    return JsonResponse(data, safe=False)


def getComments(request):
    # https://www.youtube.com/watch?v=h3nDMKV8Hns
    link = request.GET.get("link")
    keyword = request.GET.get("keyword")

    decoded_link = urllib.parse.unquote(link)
    print("link", decoded_link)
    video_id = decoded_link.split("/")[3].split("?v=")[1]

    data = utils.find_comment(video_id, keyword)

    return JsonResponse(data, safe=False)
