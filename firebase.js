var firebase = require("firebase");
 
var config = {
    apiKey: "AIzaSyA4TteapsI6K6v0HO9yUpmcKH8qAueAE4U",
    authDomain: "plantrobot-f323d.firebaseapp.com",
    databaseURL: "https://plantrobot-f323d.firebaseio.com",
    projectId: "plantrobot-f323d",
    storageBucket: "plantrobot-f323d.appspot.com",
    messagingSenderId: "960984065342"
  };
 
firebase.initializeApp(config);
 
var db = firebase.database();
 
// ref = db.ref("/");
// var value = {
//  Test1: "t1",
//  Test2: "t2"
// }
// ref.set(value);

database.ref('/').set({a:123});
database.ref('/r1').set({a:123});

var ref = db.ref("/");
ref.once("value", function(snapshot) {
 console.log(snapshot.val());
});