import * as firebase from 'firebase';

const config = {
    apiKey: 'AIzaSyBuAo-2Hnz75e-ztSNvTuqpY9BhM6DQlLs',
    authDomain: 'reactblog-829c6.firebaseapp.com',
    databaseURL: 'https://reactblog-829c6.firebaseio.com',
    projectId: 'reactblog-829c6',
    storageBucket: 'reactblog-829c6.appspot.com',
    messagingSenderId: '848529285129'
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');
