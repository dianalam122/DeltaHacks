from flask import Flask, request, Response
from flask_cors import CORS, cross_origin
import os
import dotenv

from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

# Load environment variables
dotenv.load_dotenv()

app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

# Create a new client and connect to the server
client = MongoClient(os.getenv('URI'), server_api=ServerApi('1'))
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    raise e


@app.route('/signup', methods=['POST'])
@cross_origin()
def signup():
    print(request.headers)
    # Get the data from the request
    data = request.get_json()
    # Get the users collection from the database
    users = client.users
    if users.find_one(data):
        # Return a 400 Bad Request
        return Response(status=400)
    # Insert the user into the database
    users.insert_one(data)
    # Return a 200 OK
    return Response(status=200)


@app.route('/login', methods=['POST'])
@cross_origin()
def login():
    print(request.headers)
    # Get the data from the request
    data = request.get_json()
    # Get the users collection from the database
    users = client.users
    # Get the user from the database
    user = users.find_one(data)
    # Check if the user exists
    if user:
        # Return a 200 OK
        return Response(status=200)
    else:
        # Return a 401 Unauthorized
        return Response(status=401)


if __name__ == "__main__":
    app.run(debug=True, port=4000)
