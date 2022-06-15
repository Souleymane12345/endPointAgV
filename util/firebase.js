var firebase = require('firebase');

const firebaseConfig = {
  apiKey: "AIzaSyCpL2K_LjHgQuev0fuMtzXlCf7iACi7B7k",
  authDomain: "apiagencevirtuelle.firebaseapp.com",
  projectId: "apiagencevirtuelle",
  storageBucket: "apiagencevirtuelle.appspot.com",
  messagingSenderId: "385192066325",
  appId: "1:385192066325:web:4f648185b9bc2f84293d1c",
  measurementId: "G-07JPST2CH0"
};



firebase.initializeApp(firebaseConfig); // initialise l'application 
module.exports = { firebase }; //exporter l'application