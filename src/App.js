import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Homepage from "./Pages/Homepage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./components/Header/Header.component";
import SignInSignUpPage from "./Pages/SignInSignUpPage/SignInSignUpPage.component";

// firebase
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";
import { onSnapshot } from "firebase/firestore";

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      console.log("Unmounting App");
    };
  }, []);

  return (
    <>
      <Header currentUser={currentUser} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/signin" element={<SignInSignUpPage />} />

        <Route
          path="*"
          element={
            <main
              style={{
                width: "100%",
                height: "10vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h4>There's nothing here!</h4>
            </main>
          }
        />
      </Routes>
    </>
  );
}

export default App;
