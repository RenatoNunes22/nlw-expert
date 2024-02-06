import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";

export type HeaderProps = {
  title: string;
  cartQuantity?: number;
};

export function Header({ title, cartQuantity }: HeaderProps) {
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-3 mx-5">
      <View className="flex-1">
        <Image source={require("../assets/logo.png")} className="w-32 h-6" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>
      <TouchableOpacity className="relative" activeOpacity={0.3}>
        {cartQuantity && (
          <View className="bg-lime-300 w-4 h-4 rounded-full top-2 z-10 -right-4">
            <Text className="text-slate-900 text-xs text-center font-bold">
              {cartQuantity}
            </Text>
          </View>
        )}
        <Feather name="shopping-cart" size={24} color={colors.white} />
      </TouchableOpacity>
    </View>
  );
}
