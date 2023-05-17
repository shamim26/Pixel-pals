import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import app from '../firebase/firebase.config'




export const authContext = createContext()

const auth = getAuth(app)
const AuthContext = ({children}) => {


    const authInfo ={

    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthContext;