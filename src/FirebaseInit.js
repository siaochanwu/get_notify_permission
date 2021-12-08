import firebase from 'firebase/app'
import 'firebase/messaging'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
};
firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
const db = firebase.firestore();

const publicKey = process.env.REACT_APP_VAPID_KEY;
const userRef = db.collection('fcm');

export const getToken = async (setTokenFound) => {
    let currentToken = '';
    try {
        currentToken = await messaging.getToken({vapidKey: publicKey});
        if (currentToken) {
            console.log(currentToken)
            var id = currentToken.split('-')[0]
                userRef
                .doc(id)
                .set({'token': currentToken})
                .then(function(docRef) {
                    console.log("Document written with ID: ", docRef);
                })
                .catch(function(error) {
                    console.error("Error adding document: ", error);
                });
                setTokenFound(true);
        } else {
            console.log('error in getToken')
            setTokenFound(false);
        }
    } catch (error) {
      console.log('An error occurred while retrieving token.', error);
    }
    return currentToken;
  };
