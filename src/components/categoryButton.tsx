import { Text, Pressable, PressableProps } from "react-native";

type CategoryButtonProps = PressableProps & {
  title: string;
  isSelected?: boolean;
};

export function CategoryButton({
  title,
  isSelected,
  ...typesPressable
}: CategoryButtonProps) {
  return (
    <Pressable
      className="bg-slate-800 px-4 justify-center rounded-md h-10"
      {...typesPressable}
    >
      <Text className="text-slate-100 font-subtitle text-sm">{title}</Text>
    </Pressable>
  );
}
