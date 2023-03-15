'use client';

export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export default function Button(props) {
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
}
