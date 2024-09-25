from flask import Flask, send_from_directory
import os

app = Flask(__name__, static_folder='views/dist')

# Serve the React app for all routes
@app.route('/', defaults={'path': ''})  # Default route
@app.route('/<path:path>')              # All other routes
def serve_react_app(path):
    # If the requested path exists in the 'static' folder, serve it
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        # Otherwise, serve index.html (for React routing)
        return send_from_directory(app.static_folder, 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
