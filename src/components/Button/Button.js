'use client';

const Button = (props) => {
  const { children, onClick } = props;

  function handleOnClick() {
    console.log('Button onClick');
    return onClick;
  }

  return (
    <button type="button" onClick={handleOnClick} {...props}>
      {children}
    </button>
  );
};

export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export default Button;
