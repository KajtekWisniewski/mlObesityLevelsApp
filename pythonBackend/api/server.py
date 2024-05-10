from flask import Flask, request, jsonify
from model_functions import *

app = Flask(__name__)

#pythonBackend/
#python -m flask --debug --app api/server.py run

@app.route("/api/test", methods=['POST'])
def how_many_accs():
    data = request.get_json()
    predicted_obesity = predict(data['age'], data['gender'], data['height'], data['weight'], data['CALC'], data['FAVC'], data['FCVC'], data['NCP'], data['SCC'], data['SMOKE'], data['CH2O'], data['family_history_with_overweight'], data['FAF'], data['TUE'], data['CAEC'], data['MTRANS'])
    return jsonify({"predicted obesity:": f"{predicted_obesity}"}), 201
