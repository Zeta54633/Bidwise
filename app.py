from flask import Flask, send_from_directory, abort, redirect, url_for, make_response, jsonify, request
import os

# Importing Model
from Model.initialize import initializeSession
from Model.getPlayers import getPlayersFromDB

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

@app.route('/api/getplayers', methods=['GET'])
def getplayers():
    try:
        search = request.args.get('search')
        filter_param = request.args.get('filter')
        player_type = request.args.get('type')

        # Call to fetch players from DB
        players = getPlayersFromDB(search, filter_param, player_type)

        #print("players ",players)

        # Build response
        players_data = []
        if players:
            for i in players:
                temp = {
                    'name': i[0],      # Name of the player
                    'stats': [
                     i[1],      # Total runs
                    i[2],     # Balls faced
                    i[3],     # Number of sixes
                    i[4],  ]   # Number of times out
                }
                players_data.append(temp)

        # Return JSON response
        print("player data", players_data)
        return jsonify({"message": "Success", "players": players_data})
    
    
    except Exception as e:
        # Handle the error and return a JSON error response instead of an HTML error page
        return jsonify({"message": "Error occurred", "error": str(e)}), 500








if __name__ == '__main__':
    app.run(debug=True)
