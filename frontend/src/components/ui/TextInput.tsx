type TextInputProps = {
  id: string;
  value?: string;
  name: string;
  required?: boolean;
  type: "email" | "text" | "password";
  onChange?: (e: unknown) => void;
};

export default function TextInput({
  id,
  value,
  type,
  name,
  required = true,
  onChange,
  ...rest
}: TextInputProps) {
  return (
    <input
      required={required}
      className="border caret-white border-zinc-700 p-2 rounded-md focus:outline focus:outline-violet-500 focus:text-white"
      type={type}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
      {...rest}
    />
  );
}
