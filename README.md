# Firebase-ReactJS
#### This repository contains simple approach for creating a web chatting application in ReactJS using Firebase.
#### For creating your own version of this app you must obtain the firebaseConfig. Demo is https://firebase.google.com/docs/web/setup
### The app is deployed at http://runcompile20.byethost7.com/rteChat/build/index.html

## How it works..
1. Head over to the above mentioned site and enter an username to create a refrence in the firebase real-time database and code for that is [CreateUserName.js](https://github.com/Spectre-ak/Firebase-ReactJS/blob/main/src/components/CreateUserName.js)
2. Then a list of available users in the database will show up from there the user to chat with can be selected.
3. That's it now you can start sending messages and the other user must select you for receiving messages. For that [FixedChatArea.js](https://github.com/Spectre-ak/Firebase-ReactJS/blob/main/src/components/FixedChatArea.js).


#### Install firebase for react js in Node.js
  $ npm install --save firebase
