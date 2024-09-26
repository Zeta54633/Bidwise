from flask import Flask, send_from_directory, abort, redirect, url_for, make_response, jsonify, request
import os

from DB_Connector import cursor, conn

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
    # initializeSession()
    cursor.execute(f"delete from  batterdisplay")
    conn.commit()
    cursor.execute(f" delete from currentlyChosen")
    conn.commit()
    cursor.execute(f" delete from  bowlerdisplay")
    conn.commit()
    cursor.execute(f"INSERT INTO batterdisplay SELECT * FROM tempbatterdisplay;")
    conn.commit()
    cursor.execute(f"INSERT INTO bowlerdisplay SELECT * FROM tempbowlerdisplay;")
    conn.commit()
    
    
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
                    i[-6],
                    i[-5],
                    i[-4],      # Total runs
                    i[-3],     # Balls faced
                    i[-2],     # Number of sixes
                    i[-1],  ]   # Number of times out
                }
                players_data.append(temp)

        # Return JSON response
        # print("player data", players_data)
        return jsonify({"message": "Success", "players": players_data})
    
    
    except Exception as e:
        # Handle the error and return a JSON error response instead of an HTML error page
        return jsonify({"message": "Error occurred", "error": str(e)}), 500


@app.route('/api/addplayers', methods=['GET'])
def addplayers():
    # Get data from the request
    player = request.args.get('play')   
    tab = request.args.get('table')
    # data = request.json  # For JSON data
    # print("Player SH: ", player)

    table = ''
    if tab == 'Batsmen':
        table = 'batterdisplay'
    elif tab == 'Bowlers':
        table = 'bowlerdisplay'
    else:
        print("Invalid type provided")
        return None  


    cursor.execute(f"SELECT * FROM {table} where Player = '{player}'")
    data = cursor.fetchone()

    # cursor.execute(f"DELETE FROM BatterDisplay WHERE Player = '{player}'")
    # conn.commit()

    print("DATA:  easd:   ", data)

    # cursor.execute(f"select * from currentlyChosen")
    # players = cursor.fetchall()

    # for i in players:
    #     if i[0] == player:
    #         return jsonify({"message": "Player already exists in the list"}), 400

    cursor.execute(f"insert into currentlyChosen values('{data[0]}', {data[-6]}, {data[-5]}, {data[-4]}, {data[-3]}, {data[-2]}, {data[-1]})")
    conn.commit()

    cursor.execute(f"select * from currentlyChosen")
    players = cursor.fetchall()

    print("showa all:    ",players)
    print("!!!!!!!!!!!!11111")

    playersList = []

    for i in players:
        temp = {
            'name': i[0],      # Name of the player
            'stats': [
                i[-6],
                i[-5],
                i[-4],      # Total runs
                i[-3],     # Balls faced
                i[-2],     # Number of sixes
                i[-1],  ]   # Number of times out
        }
        playersList.append(temp)

    print("L ",playersList)   
    
    response = {
        'data': playersList
    }
    return jsonify(response), 200


@app.route('/api/removeplayers', methods=['POST'])
def removeplayers():
    
    data = request.get_json()
    name = data if isinstance(data, str) else data.get('name')

    cursor.execute("SELECT Player FROM currentlychosen WHERE Player = %s", (name,))
    te = cursor.fetchone() 
    print("TE: ", te)

    if te:
        cursor.execute("DELETE FROM currentlychosen WHERE Player = %s", (name,))
        conn.commit()
        print(f"Player {name} deleted successfully.")
    else:
        print(f"Player {name} not found.")



    return jsonify({'message': f'Player {name} removed successfully.'}), 200



if __name__ == '__main__':
    app.run(debug=True)
