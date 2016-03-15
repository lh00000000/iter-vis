from flask import Flask, render_template
from flask_socketio import SocketIO, emit

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app)


@app.route('/')
def index():
    return render_template('index.html')

@socketio.on('connect')
def someone_connected():
    print('someone connected')

@socketio.on('aaa')
def test_message(message):
    print(message)
    emit('from server', message)

if __name__ == '__main__':
    socketio.run(app)