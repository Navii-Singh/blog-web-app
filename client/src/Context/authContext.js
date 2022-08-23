import { useEffect } from 'react';
import {createContext} from 'react';
import { useReducer} from 'react';

export const AuthContext = createContext();

const authReducer = (state , action) =>{
    switch(action.type){
       
        case "START_LOGIN":
            return {...state,isLoading:true,error:false}
        case "LOGGED_IN":
            return{...state,isLoading:false,user:action.payload}
        case "LOGIN_FAILED":
            return{...state,error:true,isLoading:false}
        case "LOG_OUT":
            return{...state,error:false,isLoading:false,user:null}
        case "START_UPDATING":
                return {...state,isLoading:true,error:false}
        case "UPDATED":
                return{...state,isLoading:false,user:action.payload}
        case "UPDATING_FAILED":
                return{...state,error:true,isLoading:false}    
        default:
            return state;
    }
}
export function AuthProvider({children}){
  
    const [state, dispatch] = useReducer(authReducer, {
        user:JSON.parse(localStorage.getItem('user')) || null,
        isLoading:false,
        error:false,
        
    });
    useEffect(() =>{
        localStorage.setItem('user', JSON.stringify(state.user));
    },[state.user])
    return(
        <AuthContext.Provider value={{...state,dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}