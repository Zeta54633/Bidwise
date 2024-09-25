import mysql.connector

# Connect to MySQL database with username and password
conn = mysql.connector.connect(
    host="localhost",           # Your database host
    user="root",       # Your MySQL username
    password="Grub@123",   # Your MySQL password
    database="BitWise"    # Your database name
)

# Create a cursor object to execute SQL queries
cursor = conn.cursor()

def getPlayers(type):

    print("entered get Players")

    cursor.execute(f"select * from {type} limit 5")
    players = cursor.fetchall()

    print(players)
    