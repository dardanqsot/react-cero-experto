const getResult = () => {
  return 'Darwin';
}

export const FirstApp = ( {title, subTitle} ) => {

  return (
    //Esto es el uso de un fragmento: <>
    <> 
    <h1> { title} </h1>
      {/* <code>{ JSON.stringify(newMessage)}</code>  */}
      <p>{ subTitle + 1}</p>
    </>
  );
};
