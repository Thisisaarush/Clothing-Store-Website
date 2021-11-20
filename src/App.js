import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

// components
import Homepage from "./Pages/Homepage/HomePage";
import ShopPage from "./Pages/ShopPage/ShopPage";
import Header from "./components/Header/Header.component";
import SignInSignUpPage from "./Pages/SignInSignUpPage/SignInSignUpPage.component";
import CheckoutPage from "./Pages/CheckoutPage/CheckoutPage";
import CollectionsOverview from "./components/CollectionsOverview/CollectionsOverview.component";
import CollectionPage from "./Pages/CollectionPage/CollectionPage.component";
import ContactPage from "./Pages/ContactPage/ContactPage";

// firebase
import { auth, createUserProfileDocument } from "./firebase/Firebase.utils";
import { onSnapshot } from "firebase/firestore";

// reducers
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser } from "./Redux/User/User.action";

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        onSnapshot(userRef, (snapShot) => {
          dispatch(
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data(),
            })
          );
        });
      } else {
        dispatch(setCurrentUser(userAuth));
      }
    });
    return () => {
      console.log("Unmounting App");
    };
  }, [dispatch]);

  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/contact" element={<ContactPage />} />
        <Route path="/shop" element={<ShopPage />}>
          <Route path="" element={<CollectionsOverview />} />
          <Route path=":collectionId" element={<CollectionPage />} />
        </Route>
        <Route
          exact
          path="/signin"
          element={
            currentUser ? <Navigate to="/" replace /> : <SignInSignUpPage />
          }
        />
        <Route exact path="/checkout" element={<CheckoutPage />} />

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
