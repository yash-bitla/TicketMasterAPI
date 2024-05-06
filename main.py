from flask import Flask, request
import requests
from geolib import geohash
import os

app = Flask(__name__)

segmentID = {'music': "KZFzniwnSyZfZ7v7nJ", "sports": "KZFzniwnSyZfZ7v7nE", "arts & theatre":"KZFzniwnSyZfZ7v7na", "film": "KZFzniwnSyZfZ7v7nn", "miscellaneous": "KZFzniwnSyZfZ7v7n1", "theatre":"KZFzniwnSyZfZ7v7na", "default":""}
key = os.getenv("key")

@app.route('/')
def root():
    return app.send_static_file("events.html")

@app.route('/search', methods = ['GET'])
def search():
    args = request.args
    keyword = args.get("keyword")
    lat = args.get("latitude")
    long = args.get("longitude")
    categories = args.get("categories")
    radius = args.get("radius")
    print(keyword, lat, long, categories, radius)
    hash = geohash.encode(lat, long, 7)

    link = f"https://app.ticketmaster.com/discovery/v2/events.json?apikey={key}&keyword={keyword}&segmentId={segmentID[categories]}&radius={radius}&unit=miles&geoPoint={hash}"

    response = requests.get(link)
    return response.json()

@app.route('/eventDetails', methods = ['GET'])
def eventDetails(): 
    args = request.args
    event_id = args.get("event_id")

    link = f"https://app.ticketmaster.com/discovery/v2/events/{event_id}?apikey={key}"

    response = requests.get(link)
    return response.json()

@app.route('/venueDetails', methods = ['GET'])
def venueDetails(): 
    args = request.args
    venue_name = args.get("venue_name")

    link = f"https://app.ticketmaster.com/discovery/v2/venues?apikey={key}&keyword={venue_name}"

    response = requests.get(link)
    return response.json()

if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)

