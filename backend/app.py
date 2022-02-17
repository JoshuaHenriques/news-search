from flask import Flask, jsonify, request
import requests
import os
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("NEWS_API_KEY")

app = Flask(__name__)

@app.route('/top-headlines/', methods = ['GET'])
def top_headlines():
    if(request.method == 'GET'):
        res = requests.get(f'https://newsapi.org/v2/top-headlines?country=us&apiKey={API_KEY}')
        # return jsonify({'data': res})
        print(request.args.to_dict()) # http://127.0.0.1:5000/top-headlines/?a=hello&b=world
        return res.json()
    
if __name__ == '__main__':
    app.run(debug = True)