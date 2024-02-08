import { useReducer } from "react";
import { loginReducer } from "../pages/reducers/loginReducer";
import Swal from "sweetalert2";

const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
    isAuth: false,
    user: undefined,
}

export const useAuth = () => {
    const [login, dispatch] = useReducer( loginReducer, initialLogin);

    const handlerLogin = ({username, password}) => {
        if (username ==='admin' && password === '12345'){
            const user = { username: 'admin'}
            dispatch({
                type: 'login',
                payload: user,
            });
            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                user,
            }));

        } else {
            Swal.fire('Error Login', 'Username o password invalidos', 'error');
        }
    }

    const  handlerLogout = () => {
        console.log("EN LOGOUT??")
        dispatch({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }

    return {
        login, 
        handlerLogin,
        handlerLogout,
    }
}
