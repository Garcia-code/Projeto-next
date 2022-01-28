import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider ; ({ children }) => {
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signin = () => {}
    const signout = () => {}

    return

} 
   

    
export const AuthConsumer = AuthContext.Consumer;

export default AuthContext;

