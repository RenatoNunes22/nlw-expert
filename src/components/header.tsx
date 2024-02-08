import { Image, View, Text, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "tailwindcss/colors";
import { usePathname } from "expo-router";
import { Link } from "expo-router";

export type HeaderProps = {
  title: string;
  cartQuantityItems?: number;
};

export function Header({ title, cartQuantityItems }: HeaderProps) {
  const route = usePathname();
  return (
    <View className="flex-row items-center border-b border-slate-700 pb-3 mx-5 mt-8">
      <View className="flex-1">
        <Image source={require("../assets/logo.png")} className="w-32 h-6" />
        <Text className="text-white text-xl font-heading mt-2">{title}</Text>
      </View>
      {route !== "/cart" && (
        <Link href={"/cart"} asChild>
          <TouchableOpacity className="relative" activeOpacity={0.3}>
            <View className="bg-lime-300 w-4 h-4 rounded-full top-2 z-10 -right-4">
              <Text className="text-slate-900 text-xs text-center font-bold">
                {cartQuantityItems}
              </Text>
            </View>
            <Feather name="shopping-cart" size={24} color={colors.white} />
          </TouchableOpacity>
        </Link>
      )}
    </View>
  );
}
