export const HelloWorldApp = ({ user, id, title}) => {
    
    console.log(title)
    // const name = 'Pepe';

    return (
        <>
            <h1>Hola Mundo</h1>
            <div>Que tal! {user} con el id { id } </div>
        </>
    );
}
