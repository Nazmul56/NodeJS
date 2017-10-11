var socket = io.connect('http://localhost:9000');
var myAuthToken = "sreejesh@kriyatma";
//var encrypted = md5(myAuthToken);
socket.on('connect', function(){
  socket.emit('authenticate', {token: myAuthToken});
});

	//CryptoJS.MD5(myAuthToken).toString()
	//myAuthToken
//// <script src="/main.js"></script>