from flask import Flask, jsonify, request
from flask_cors import cross_origin
import os
from dotenv import load_dotenv
from newsapi import NewsApiClient
import logging

logging.basicConfig(level=logging.INFO)

load_dotenv()

API_KEY = os.getenv("NEWS_API_KEY")
api = NewsApiClient(api_key=API_KEY)

app = Flask(__name__)

@app.route('/search/', methods = ['GET'])
@cross_origin()
def search():
	if(request.method == 'GET'):
		args = request.args.to_dict()
		keywords = args['keywords']
		sort_by = args['sort-by']
		page = int(args['page'])  
  
		if 'from' in args and 'to' in args:
			from_param = args['from']
			to = args['to']
			articles = api.get_everything(q=keywords, language='en', from_param=from_param, to=to, sort_by=sort_by, page_size=5, page=page)
			return jsonify(articles)

		elif 'from' in args and 'to' not in args:
			from_param = args['from']
			articles = api.get_everything(q=keywords, language='en', from_param=from_param, sort_by=sort_by, page_size=5, page=page)
			return jsonify(articles)

		elif 'to' in args and 'from' not in args:
			to = args['to']
			articles = api.get_everything(q=keywords, language='en', to=to, sort_by=sort_by, page_size=5, page=page)
			return jsonify(articles)

		elif 'from' not in args and 'to' not in args:
			articles = api.get_everything(q=keywords, language='en', sort_by=sort_by, page_size=5, page=page)
			return jsonify(articles)

@app.route('/top-headlines/', methods = ["GET"])
@cross_origin()
def top_headlines():
    if(request.method == 'GET'):
        top_headlines = api.get_top_headlines(page_size=5)
        return jsonify(top_headlines)
    
if __name__ == '__main__':
    app.run(debug = True)