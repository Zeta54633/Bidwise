# Creating the Flask App
from flask import Flask, render_template

app = Flask(__name__, static_folder='static')   
########################


# Creating the Routes

@app.route("/<path:path>")
def LandingPage():
    return app.send_from_directory(app.static_folder, 'index.html')

############################


if __name__ == '__main__':
    app.run(debug=True)
