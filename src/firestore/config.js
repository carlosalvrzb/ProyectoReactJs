import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBaO07n6IFvc4SsHLTisq-zdDHoKRSc1nA",
  authDomain: "proyecto-react-carlos.firebaseapp.com",
  projectId: "proyecto-react-carlos",
  storageBucket: "proyecto-react-carlos.appspot.com",
  messagingSenderId: "437119641854",
  appId: "1:437119641854:web:9f39d0c7b68a35ea281daf"
};


const app = initializeApp(firebaseConfig);

export const initFirestoreApp  = () => {
  return app
}