import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

// Hook returns the value of AuthContext
// Method is invoked whenever we want to use our authentication data
export const useAuthContext = () => {
    const context = useContext(AuthContext)

    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }

    return context
}