from flask import Flask, request, jsonify
from model_functions import *
from flask_cors import CORS, cross_origin

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
#pythonBackend/
#python -m flask --debug --app api/server.py run

@app.route("/api/result", methods=['POST'])
def how_many_accs():
    data = request.get_json()
    predicted_obesity = predict(data['age'], data['gender'], data['height'], data['weight'], data['CALC'], data['FAVC'], data['FCVC'], data['NCP'], data['SCC'], data['SMOKE'], data['CH2O'], data['family_history_with_overweight'], data['FAF'], data['TUE'], data['CAEC'], data['MTRANS'])
    return jsonify(predicted_obesity), 201

@app.route("/api/test", methods=['POST'])
def test_request():
    data = request.get_json()
    print(data)
    return jsonify(data), 201