import mysql.connector
from flask import jsonify
import json

from DB_Connector import cursor, conn


def getPlayersFromDB(name, filter_param, player_type):
    print("Entered getPlayersFromDB")

    # Determine the correct table based on type
    

    table = ''
    if player_type == 'Batsmen':
        table = 'batterdisplay'
    elif player_type == 'Bowlers':
        table = 'bowlerdisplay'
    else:
        print("Invalid type provided")
        return None  

    print("FILTERS: ",filter_param)

    if name != '' and filter_param.length == 0:
        print("here is  a name")
        cursor.execute(f"select * from {table} where Player = {name}")
        print("GET OUT")
        players = cursor.fetchall()
        print("GET OUT")

    elif len(filter_param) > 0:
        print("??")
        
        
        val = json.loads(filter_param)
        print("VA: ", val.values())
        valu = list(val)


        print("Enter Power")
        cursor.execute(f"select * from {table} order by {valu[0]} desc limit 25")
        players = cursor.fetchall()
        print("fwfr")
    else:
        print("$%4233")
        cursor.execute(f"SELECT * FROM {table} LIMIT 25")
        players = cursor.fetchall()
        print("GET OUT")
        print("hhhh")

    print("GET OUT")
    # Build the query with placeholders to avoid SQL injection
    # query = f"SELECT * FROM {table} LIMIT 5"  # You can modify the query as needed    

    

    # print("Players: @#!23 ",players)

    return  players

