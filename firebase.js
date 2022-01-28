import firebase from 'firbase/app';
import 'firebase/auth';
if (!firebase.apps.lenght){
    firebase.initializeApp({
        piKey: "AIzaSyCQcGdeKPsHSsdXwMPCt3g2lECwEcLqeYY",
        authDomain: "projeto-next-8a179.firebaseapp.com",
        projectId: "projeto-next-8a179",
        
    })
}
export default firebase;

