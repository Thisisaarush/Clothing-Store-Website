import { initializeApp } from "firebase/app";
import { doc, setDoc, getFirestore, getDoc } from "firebase/firestore";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAY0AwA4tESLVbcYX1t9KGiG8zWq-5Ta_Q",
  authDomain: "clothing-store-584cd.firebaseapp.com",
  projectId: "clothing-store-584cd",
  storageBucket: "clothing-store-584cd.appspot.com",
  messagingSenderId: "3559620519",
  appId: "1:3559620519:web:e853687b3e1b632583c082",
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

// firestore database
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = doc(firestore, `users/${userAuth.uid}`);
  const snapShot = await getDoc(userRef);
  const { displayName, email } = userAuth;
  const createdAt = new Date();
  const docData = {
    displayName,
    email,
    createdAt,
    ...additionalData,
  };
  if (!snapShot.exists()) {
    try {
      await setDoc(userRef, docData, { merge: true });
    } catch (error) {
      console.log("Error" + error);
    }
  }

  return userRef;
};

// signinwithgoogle
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(
        "Credential" + credential + "Token " + token + "User " + user
      );
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const errorEmail = error.email;
      const errorCredential = GoogleAuthProvider.credentialFromError(error);
      console.log(
        "ErrorCode " +
          errorCode +
          "ErrorMessage " +
          errorMessage +
          "ErrorEmail " +
          errorEmail +
          "ErrorCredential " +
          errorCredential
      );
    });
