// SC.initialize({
//   client_id: 'YOUR_CLIENT_ID'
// });

// $(document).ready(function() {
//  SC.get('/tracks', { genres: 'rock' }, function(tracks) {
//     $(tracks).each(function(index, track) {
//      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
//     });
//   });
// });

//authenticate
SC.initialize({
  client_id: '340f063c670272fac27cfa67bffcafc4',
  redirect_uri: 'http://external.codecademy.com/soundcloud.html'
});

$(document).ready(function() {
  $('a.connect').click(function(e) {
    e.preventDefault();
		 SC.connect(function(){
				 SC.get('/me',function(me){
				 	$('#username').html(me.username);
				 });
			 }) ;  
	  });
});


// //INTRO TO API REST
// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// xhr.send();

// console.log(xhr.status);
// console.log(xhr.statusText);

// // {
// //   "myBlog": {
// //     "pageViews": "4720",
// //     "subscribers": "1711",
// //     "numberOfPosts": "37",
// //     "mostRecentPost": "2013-01-04",
// //   }
// // }

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/", false);
// // Add your code below!
// xhr.send();
// console.log(xhr.status);
// console.log(xhr.statusText);

// // POST /codecademy/learn-http HTTP/1.1
// // Host: www.codecademy.com
// // Content-Type: text/html; charset=UTF-8

// // Name=Eric&Age=26

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "https://www.codecademy.com/files/samples/javascript_learn_apis.xml", false);

// xhr.setRequestHeader('Content-Type', 'text/xml');
// xhr.send();

// xmlDocument = xhr.responseXML;
// console.log(xmlDocument.childNodes['0'].textContent);

// var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';

// var json = JSON.parse(demo);
// console.log(json);