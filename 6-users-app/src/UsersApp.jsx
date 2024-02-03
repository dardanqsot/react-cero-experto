import Swal from "sweetalert2";
import { LoginPage } from "./auth/pages/LoginPage";
import { loginReducer } from "./auth/pages/reducers/loginReducer";
import { UsersPage } from "./page/UsersPage";
import { useReducer } from "react";
import { Navbar } from "./components/layout/Navbar";

export const UsersApp = () => {

    const initialLogin = JSON.parse(sessionStorage.getItem('login')) || {
        isAuth: false,
        user: undefined,
    }
    const [login, dispach] = useReducer( loginReducer, initialLogin);
    const handlerLogin = ({username, password}) => {
        if (username ==='admin' && password === '12345'){
            const user = { username: 'admin'}
            dispach({
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

    const handlerLogout = () => {
        console.log("EN LOGOUT??")
        dispach({
            type: 'logout',
        });
        sessionStorage.removeItem('login');
    }
    return (
        <>
            {login.isAuth
                ? (
                    <>
                        <Navbar login={login} handlerLogout={handlerLogout}/>
                        <UsersPage/>
                    </>
                )
                
                : <LoginPage handlerLogin={handlerLogin}/>
            }
            
            {/* <UsersPage /> */}
        </>
    );
}