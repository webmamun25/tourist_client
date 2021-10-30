import {
  useEffect,
  useState,
} from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

import initializeAuthentication
  from '../Pages/shared/Login/Firebase/Firebase.init';

initializeAuthentication();
  
  const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    const auth = getAuth();
  
    const signInUsingGoogle = () => {
      setIsLoading(true);
      const googleProvider = new GoogleAuthProvider();
  
      return signInWithPopup(auth, googleProvider)
        
        .finally(() => setIsLoading(false));
    };
  
    // observe user state change
    useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
        setIsLoading(false);
      });
      return () => unsubscribed;
    }, [auth]);
  
    const logOut = () => {
      setIsLoading(true);
      signOut(auth)
        .then(() => {})
        .finally(() => setIsLoading(false));
    };
  
    return {
      auth,
      user,
      isLoading,
      signInUsingGoogle,
      createUserWithEmailAndPassword,
      logOut,
    };
  };
  
  export default useFirebase;