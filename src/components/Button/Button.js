export const VARIANT = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
};

export default function Button(props) {
  const { children } = props;
  return (
    <button type="button" {...props}>
      {children}
    </button>
  );
}
