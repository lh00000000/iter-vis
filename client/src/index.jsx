import p5 from 'p5'
import io from 'socket.io-client'
import $ from 'jquery'
console.log('i\'m in in here')

var globalState = 'nothing here yet'
var socket = io('http://' + document.domain + ':' + location.port + '/test')

socket.on('polll', (msg) => {
    console.log(msg)
})
// socket.on('connection', (socket) => {
// })


var sketch = function(p) {
    var x = 100
    var y = 100

    p.setup = function() {
        p.createCanvas(700, 400)
    }

    p.draw = function() {
        p.background(0)
        p.fill(255)

        p.text(globalState, 10, 10, 70, 80)
        
    }

}

var myp5 = new p5(sketch)