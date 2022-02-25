'''
from newsapi import NewsApiClient

# Init
newsapi = NewsApiClient(api_key='eef49c26769c4ceb87f5b7c68bd1426b')

# /v2/top-headlines
top_headlines = newsapi.get_top_headlines(q='bitcoin',
                                          sources='bbc-news,the-verge',
                                          category='business',
                                          language='en',
                                          country='us')

# /v2/everything
all_articles = newsapi.get_everything(q='bitcoin',
                                      sources='bbc-news,the-verge',
                                      domains='bbc.co.uk,techcrunch.com',
                                      from_param='2017-12-01',
                                      to='2017-12-12',
                                      language='en',
                                      sort_by='relevancy',
                                      page=2)

# /v2/top-headlines/sources
sources = newsapi.get_sources()
'''

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
		from_param = args['from']
		to = args['to']
		articles = api.get_everything(q=keywords, language='en', from_param=from_param, to=to, sort_by=sort_by, page_size=5, page=page)
		return jsonify(articles)

@app.route('/top-headlines/', methods = ["GET"])
@cross_origin()
def top_headlines():
    if(request.method == 'GET'):
        top_headlines = api.get_top_headlines(page_size=5)
        return jsonify(top_headlines)
    
if __name__ == '__main__':
    app.run(debug = True)