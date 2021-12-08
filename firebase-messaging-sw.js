importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js")

var firebaseConfig = {
    apiKey: "AIzaSyA0rmWTnaljWb-mnrN8gtwsIAEXoI_I0No",
    authDomain: "fcm-app-5d920.firebaseapp.com",
    projectId: "fcm-app-5d920",
    storageBucket: "fcm-app-5d920.appspot.com",
    messagingSenderId: "111323814801",
    appId: "1:111323814801:web:ba28c6d8e63b3f7a795830",
    measurementId: "G-QPLF5GJ8VX"
};
firebase.initializeApp(firebaseConfig);


const messaging = firebase.messaging();

// messaging.onBackgroundMessage(function (payload) {
//     console.log("Received background message ", payload);
//     const notificationTitle = payload.notification.title;
//       const notificationOptions = {
//         body: payload.notification.body,
//         icon: "/logo192.png",
//     };
//   return self.registration.showNotification(
//       notificationTitle,
//       notificationOptions
//     );
//   });