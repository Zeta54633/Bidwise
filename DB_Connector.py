import mysql.connector


# Connect to MySQL database with username and password
conn = mysql.connector.connect(
    host="localhost",           # Your database host
    user="root",       # Your MySQL username
    password="Grub@123",   # Your MySQL password
    database="BidWise"    # Your database name
)

cursor = conn.cursor()