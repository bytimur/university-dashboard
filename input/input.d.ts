export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  name: string;
  error?: string;
  type?: "text" | "password" | "email" | "number";
  register: UseFormRegister<any>;
}
