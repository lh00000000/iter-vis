uses:
- reactjs
- semantic ui
- redux
- flask (gunicorn)

build semantic ui 
$ cd client/semantic
$ gulp build


build client-side code
$ cd client
$ webpack -w

start server
$ cd server
$ gunicorn app:app