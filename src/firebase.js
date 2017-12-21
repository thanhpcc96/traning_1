import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyDpIqVtatSf30oqf-mmPp9l0ssg2uL6Na8",
    authDomain: "mychat-b9a53.firebaseapp.com",
    databaseURL: "https://mychat-b9a53.firebaseio.com",
    projectId: "mychat-b9a53",
    storageBucket: "mychat-b9a53.appspot.com",
    messagingSenderId: "795859599608"
};
firebase.initializeApp(config);

export default firebase;