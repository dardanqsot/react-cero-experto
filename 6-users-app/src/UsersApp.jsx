import { useReducer, useState } from "react";
import { UserForm } from "./components/UserForm";
import { UsersList } from "./components/UsersList";
import { usersReducer } from "./reducers/usersReducer";

export const UsersApp = () => {

    return (
        <div className="container my-4">
            <h2>Users App</h2>
            <div className="row">
                <div className="col">
                    <UserForm 
                    initialUserForm = {initialUserForm}
                    userSelected = {userSelected}
                    handlerAddUser={handlerAddUser} />
                </div>
                <div className="col">
                    { users.length === 0 ? <div className="alert-warning"> No hay usuarios en el Sistema!</div> 
                      : 
                      <UsersList
                        handlerUserSelectedForm={handlerUserSelectedForm}
                        handlerRemoveUser={handlerRemoveUser}
                        users={users}
                        />
                    }
                    
                </div>
            </div>
        </div>
    );
}