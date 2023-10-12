import { UserForm } from "./components/UserForm";
import { UserList } from "./components/UserList";

export const UsersApp = () => {

  const initialUsers = [
    {
      id: 1,
      username: 'darwin',
      password: '12345',
      email: 'dardan@correo.com'
    },
  ];

  return (
    <div className="container my-4">
      <h2> Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm />
        </div>
        <div className="col">
          <UserList users= { initialUsers }/>
        </div>
      </div>

    </div>
  );
}
