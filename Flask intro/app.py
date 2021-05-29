from flask import Flask,redirect,request

app = Flask(__name__)
combine = ""



@app.route('/')
def hello_world():
    return 'Hello World!'

@app.route('/postman', methods = ['GET','POST'])
def hello_world3():
    data = request.get_data()
    return 'Hello world' + request.method + str(data)

@app.route('/greet/<string:user>', methods=['GET'])
def greet(user):
    return 'hello ' + user

@app.route('/goback', methods=['GET'])
def getback():
    return redirect('/')

@app.route('/inputstring/<string:s>', methods=['GET','POST'])
def input(s):
    global combine
    combine += s
    return combine


if __name__ == '__main__':
    app.run()
