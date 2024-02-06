import { TouchableOpacity, TouchableOpacityProps, Text } from "react-native";

type ButtonProps = TouchableOpacityProps & {
  children: React.ReactNode;
};

type ButtonTextProps = {
  children: React.ReactNode;
};

type ButtonIconProps = {
  children: React.ReactNode;
};

function Button({ children, ...TouchableOpacityProps }: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      className="h-12 bg-lime-400 rounded-md items-center justify-center flex-row"
      {...TouchableOpacityProps}
    >
      {children}
    </TouchableOpacity>
  );
}

function ButtonText({ children }: ButtonTextProps) {
  return (
    <Text className="text-slate-900 font-heading text-base mx-2">
      {children}
    </Text>
  );
}

function ButtonIcon({ children }: ButtonIconProps) {
  return children;
}

Button.Text = ButtonText;
Button.Icon = ButtonIcon;

export { Button };
