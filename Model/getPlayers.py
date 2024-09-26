import mysql.connector
from flask import jsonify

# Connect to MySQL database with username and password
conn = mysql.connector.connect(
    host="localhost",           # Your database host
    user="root",       # Your MySQL username
    password="Grub@123",   # Your MySQL password
    database="BidWise"    # Your database name
)

# Create a cursor object to execute SQL queries
cursor = conn.cursor()

def getPlayersFromDB(name, filter_param, player_type):
    print("Entered getPlayersFromDB")

    # Determine the correct table based on type
    table = ''
    if player_type == 'Batsmen':
        table = 'BatterDisplay'
    elif player_type == 'Bowlers':
        table = 'bowlers'
    else:
        print("Invalid type provided")
        return None  
    
    print("oneL ",filter_param)
    print("oneL ",filter_param)


    # Build the query with placeholders to avoid SQL injection
    # query = f"SELECT * FROM {table} LIMIT 5"  # You can modify the query as needed



    try:
        
        cursor.execute(f"SELECT * FROM {table} LIMIT 25")

        players = cursor.fetchall()

        return  players

    except mysql.connector.Error as err:
        print(f"Error: {err}")
        return None