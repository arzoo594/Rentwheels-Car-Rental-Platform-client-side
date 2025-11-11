import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../assets/FireBase/firebase.config";
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const createUserWithEmailAndPasswordFunc = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithEmailAndPasswordFunc = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateProfileFunc = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName,
      photoURL,
    });
  };
  const signInWithPopUpFunc = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const signOutFunc = () => {
    return signOut(auth, googleProvider);
  };
  const authInfo = {
    createUserWithEmailAndPasswordFunc,
    signInWithEmailAndPasswordFunc,
    user,
    setUser,
    updateProfileFunc,
    signOutFunc,
    signInWithPopUpFunc,
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      console.log(currUser);
      setUser(currUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
