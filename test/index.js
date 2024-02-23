  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { 
        getDatabase, 
        ref, 
        child, 
        get, 
        onValue 
    } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBcpKUw2Y2Vurqz3v6V5SxKsURmdUaYyk4",
    authDomain: "melissafirebase.firebaseapp.com",
    projectId: "melissafirebase",
    storageBucket: "melissafirebase.appspot.com",
    messagingSenderId: "607198223687",
    appId: "1:607198223687:web:9acf2f25179890c1c84062",
    measurementId: "G-RKX8T9E1TX"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const database = getDatabase();
  const messages = ref(database, '/messages');

  onValue(messages, (snapshot) => {
    // console.log(snapshot);

    const ul = document.getElementById("messages");
    ul.replaceChildren();

    snapshot.forEach((childSnapshot) => {
        const childKey = childSnapshot.key;
        const childData = childSnapshot.val();

        console.log(childKey);
        console.log(childData);

        const text = document.createTextNode(childData.message);
        const li = document.createElement("li");

        li.appendChild(text);
        ul.appendChild(li);
    });
  }, {
    onlyOnce: false,

  })