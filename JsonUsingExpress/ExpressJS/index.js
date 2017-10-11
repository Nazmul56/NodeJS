var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

/*io.on('connection', function(socket){
    console.log('a user connected');
});*/
/*
io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
});
*/

/*io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
    });
});*/

io.on('connection', function(socket){
    socket.on('chat message', function(msg){
        io.emit('chat message', msg);
    });
});


http.listen(3000, function(){
    console.log('listening on *:3000');
});

app.get('/listUsers', function (req, res) {
   // fs.readFile( __dirname + "/" + "user.json", 'utf8', function (err, data) {
    //    data = JSON.parse( data );
    //    data["user4"] = user["user4"];
      //  console.log( data );
        //JSON.stringify(data)
        //sockets.clientsInRoom('test')
        //var cars = ["Saab", "Volvo", "BMW"];
       // console.log(sockets.SimpleMessage);
    //rooms['chat message'
    //var room = io.nsps['/'].adapter.length;
    if(io.engine === io.eio) {// => true
    /*    Object.keys(io.engine.client);// => [ 'US8AxrUrrDF_G7ZUAAAA', 'Ov2Ca24Olkhf2NHbAAAB' ]
        Object.keys(io.eio.client);*/
        var allConnectedClients = Object.keys(io.sockets.connected);
        //JSON.stringify(allConnectedClients)
        var list = []
        var count = 0;
        for ( var client in io.sockets.connected )
        {
            list.push(client)
            count++;
        }


        //allConnectedClients[1]
        res.end(count+"\n"+JSON.stringify(allConnectedClients));

    }
    });
server = app.listen(8881);

