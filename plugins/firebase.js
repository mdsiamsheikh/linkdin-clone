import firebase from "firebase/compat/app";
import "firebase/compat/auth";
const firebaseConfig = {
  apiKey: "AIzaSyB1H-Ws3GnzLkdMPs2VQ_oUz8MEF4z_TeQ",
  authDomain: "linkedin-f162b.firebaseapp.com",
  projectId: "linkedin-f162b",
  storageBucket: "linkedin-f162b.appspot.com",
  messagingSenderId: "403764072646",
  appId: "1:403764072646:web:42324a438152c77dc487c7",
  measurementId: "G-9CT07P2C8T",
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default function ({ store }) {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      store.commit("SET_USER", user);
    } else {
      store.commit("SET_USER", null);
    }
  });
}
