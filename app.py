from flask import Flask, send_from_directory, abort, redirect, url_for, make_response
import os

# Importing Model
from Model.initialize import initializeSession

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






if __name__ == '__main__':
    app.run(debug=True)
