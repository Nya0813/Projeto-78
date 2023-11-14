import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
 
  apiKey: "AIzaSyB-Tr-W2jeWbr_cYgQCyoKI0MIt1tyByIQ",
  authDomain: "projeto-78-9bfb7.firebaseapp.com",
  projectId: "projeto-78-9bfb7",
  storageBucket: "projeto-78-9bfb7.appspot.com",
  messagingSenderId: "400598803325",
  appId: "1:400598803325:web:91978881a91bf0758b2214"

};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
