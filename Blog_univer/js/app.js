
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 
  const firebaseConfig = {
    apiKey: "AIzaSyCYO7FjwJoZIfexz1thB27V5gsLbx962gs",
    authDomain: "sistema-de-comunicacao.firebaseapp.com",
    projectId: "sistema-de-comunicacao",
    storageBucket: "sistema-de-comunicacao.appspot.com",
    messagingSenderId: "619319424118",
    appId: "1:619319424118:web:fa7b1e58c5b33377809b57",
    measurementId: "G-0S323Z5XQ2"
  };


  const firestore = getFirestore();

  const specialOfTheDay = doc(firestore, 'usuario/tt5DVSVCk90A0QlZw1Xq')




console.log('Firebase funcionando');

  // Initialize Firebase
  //const app = initializeApp(firebaseConfig);
  //const analytics = getAnalytics(app);
  //import { collection, addDoc } from "firebase/firestore";

  //try {
 //   const docRef = await addDoc(collection(db, "usuario"), {
  //    nome: "Lucas",
  //    email: "lucasxavierhl15@gmail.com",
  //    senha: 1234,
  //    administrador: true
  //  });
 //   console.log("Document written with ID: ", docRef.id);
 // } catch (e) {
 //   console.error("Error adding document: ", e);
  //}

 // class User{
 //   usersRef = db.collection("usuario");

  //  async add(nome, email, senha){
  //    const user = {nome, email, senha};
   //     try{
   //       const docRef = await
   //     }

  //  }
 // }