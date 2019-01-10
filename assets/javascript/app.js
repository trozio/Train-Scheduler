  var config = {
    apiKey: "AIzaSyDXcfdArCmoR7kQNUDgg9rnUgCNBdQkuwA",
    authDomain: "train-scheduler-b732a.firebaseapp.com",
    databaseURL: "https://train-scheduler-b732a.firebaseio.com",
    projectId: "train-scheduler-b732a",
    storageBucket: "train-scheduler-b732a.appspot.com",
    messagingSenderId: "538872870378"
  };
  firebase.initializeApp(config);

let name = "";
let destination = "";
let trainTime = "";
let frequency = "";
let database = firebase.database();

$("#button").on("click", function(event){
	event.preventDefault();
	name = $("#name").val().trim();
	destination = $("#destination").val().trim();
	trainTime = $("#firstTrainTime").val().trim();
	frequency = $("#frequency").val().trim();


	database.ref().set({
		name: name,
		destination: destination,
		traintime: trainTime,
		frequency: frequency
	});

});

console.log(moment().endOf('trainTime').fromNow());

database.ref().on("value", function(snapshot){
	console.log(snapshot.val().name);
	console.log(snapshot.val().destination);
	console.log(snapshot.val().traintime);
	console.log(snapshot.val().frequency);

	$(".body").append("<tr> <td>" + snapshot.val().name + "</td>" + "<td>" + snapshot.val().destination + "</td> <td>" + snapshot.val().frequency + "</td> <td>" + snapshot.val().traintime + "</td> </tr>");


})
