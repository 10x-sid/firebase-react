import { initializeApp } from 'firebase/app'

interface config{
  apiKey:string;
  authDomain:string;
  projectId:string;
  storageBucket:string;
  messagingSenderId:string;
  appId:string;
  databaseURL:string

}
const firebaseConfig:config = {
    apiKey: "AIzaSyA_r-5CDyWsUs2_efUFQrs0X6XENSA-hTg",
    authDomain: "first-app-e2da2.firebaseapp.com",
    projectId: "first-app-e2da2",
    storageBucket: "first-app-e2da2.appspot.com",
    messagingSenderId: "396562941396",
    appId: "1:396562941396:web:7e3890051c271d88b20241",
    databaseURL:"https://first-app-e2da2-default-rtdb.firebaseio.com"
  };


  export const app = initializeApp(firebaseConfig) // intiaze the new app based on this config