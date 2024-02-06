import { Link, LinkProps } from "expo-router";
import { View } from "react-native";

type LinkButtonProps = LinkProps<string> & {
  title: string;
  href: string;
};

export function LinkButton({ title, ...rest }: LinkButtonProps) {
  return <Link {...rest}>{title}</Link>;
}
