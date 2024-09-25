from flask import Flask, send_from_directory, abort, redirect, url_for, make_response, jsonify
import os

# Importing Model
from Model.initialize import initializeSession
from Model.getPlayers import getPlayers

app = Flask(__name__, static_folder='views/dist')

# Route Handler
@app.route('/', defaults={'path': ''}) 
@app.route('/<path:path>')             
def serve_react_app(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')


# API Handler
@app.route('/api/maketeam', methods=['GET'])  # Coming from the get started button.
def redirect_to_makeTeam():
    initializeSession()
    
    return jsonify({'message': 'Team initialized successfully'}), 200

app.route('api/getplayer', methods=['GET'])
def  get_player():
    getPlayers(type)

    return jsonify({'message': 'Data successfully  fetched'}), 200






if __name__ == '__main__':
    app.run(debug=True)
