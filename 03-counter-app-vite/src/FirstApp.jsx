import PropTypes from 'prop-types';

const getResult = () => {
  return 'Darwin';
}
//PropTypes para definir el tipo a las properties
export const FirstApp = ( {title, subTitle, name} ) => {

  return (
    //Esto es el uso de un fragmento: <>
    <> 
    <h1 data-testid="test-title"> { title } </h1>
      {/* <code>{ JSON.stringify(newMessage)}</code>  */}
      <p>{ subTitle }</p>
      <p>{ subTitle }</p>
      <p>{ name }</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string
}

FirstApp.defaultProps = {
  name: 'Darwin',
  subTitle: 'No hay subtítulo',
  // title: 'No hay título',
}
