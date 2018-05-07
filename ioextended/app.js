// Initialize Firebase
const config = {
    apiKey: "AIzaSyBg2X7v6WRSHafTaUXlXNDoYJ9_OXrTupQ",
    authDomain: "ioextended2018.firebaseapp.com",
    databaseURL: "https://ioextended2018.firebaseio.com",
    projectId: "ioextended2018",
    storageBucket: "ioextended2018.appspot.com",
    messagingSenderId: "960320141392"
};
firebase.initializeApp(config);

// Elementos
const painel = document.getElementById('painel')
const picker = document.getElementById('picker')

// Banco de dados
const dbRefCor = firebase.database().ref().child('cor');

// Sync object
dbRefCor.on('value', snapshot => {
    painel.style.backgroundColor = snapshot.val()
})

picker.addEventListener('change', event => {
    dbRefCor.set(event.target.value)
})