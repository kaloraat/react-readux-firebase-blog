import * as firebase from 'firebase';

const config = {
    apiKey: 'XXX',
    authDomain: 'xxx.firebaseapp.com',
    databaseURL: 'https://xxx.firebaseio.com',
    projectId: 'xxx',
    storageBucket: 'xxx.appspot.com',
    messagingSenderId: 'xxxxxx'
};
firebase.initializeApp(config);

export const database = firebase.database().ref('/posts');
