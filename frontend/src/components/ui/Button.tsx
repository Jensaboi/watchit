export default function Button({ children, ...rest }) {
  if (!children) return null;

  return <button {...rest}>{children}</button>;
}
