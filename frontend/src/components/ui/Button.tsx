export default function Button({
  children,
  variant,
  className,
  ...rest
}: {
  children: any;
  className?: string;
  onClick?: () => void;
  variant: string;
}) {
  if (!children) return null;

  const variants = { primary: "primary-btn", secondary: "secondary-btn" };

  return (
    <button
      className={`${variant ? variants[variant] : ""} ${className ? className : ""}`}
      {...rest}
    >
      {children}
    </button>
  );
}
