import { TextInput, TextInputProps } from "react-native";
import colors from "tailwindcss/colors";

export function Input({ ...rest }: TextInputProps) {
  return (
    <TextInput
      multiline
      textAlignVertical="top"
      placeholder={colors.slate[400]}
      className="h-32 bg-slate-800 rounded-md mt-4 p-4 px-10 py-3 text-slate-100 font-body"
      {...rest}
    />
  );
}
