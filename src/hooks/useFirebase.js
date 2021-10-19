import initializeAuthentication from "../Firebase/firebase.init"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword    } from "firebase/auth";
import { useEffect, useState } from "react";


initializeAuthentication();

const useFirebase =() => {
    const [user, setUser] = useState({});
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInUsingGoogle = () => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
            .finally( () => setIsLoading(false))
    }
    // state change
   useEffect( () => {
    const unsubscribed =  onAuthStateChanged(auth, (user) => {
        if(user){
            setUser(user)
        }else{
            setUser({})
        } 
        setIsLoading(false)
    });
    return () => unsubscribed;
   }, [])

    // logOut 
    const logOut =()=> {
        setIsLoading(true)
        signOut(auth)
            .then( () => {  })
            .finally(() => setIsLoading(false))

    }


    // email password authentication

    const handleRegistration = (e) => {
        e.preventDefault();
        console.log(email, password);
        if(password.length < 6){
            setError('Password must be at least 6 Charecters Long')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user 
                console.log(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return{
        user, 
        error,
        isLoading,
        signInUsingGoogle,
        logOut,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange
    }
}

export default useFirebase;