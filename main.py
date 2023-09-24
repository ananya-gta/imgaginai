from flask import Flask, jsonify
from config import OPENAI_KEY
import openai
from flask import render_template

openai.api_key = OPENAI_KEY
app = Flask(__name__)


@app.route('/')
def index():
  return render_template('index.html', )


@app.route('/generate/<prompt>')
def generate(prompt):
  print("prompt=", prompt)
  response = openai.Image.create(prompt=prompt, n=3, size="256x256")
  print(response)
  return jsonify(response)


app.run(host='0.0.0.0', port=81)
