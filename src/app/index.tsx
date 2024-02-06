import { CategoryButton } from "@/components/categoryButton";
import { Header } from "@/components/header";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="bg-slate-900 flex-1 pt-8">
      <Header title="Faca seu pedido" cartQuantity={3} />
      <View className="flex flex-collumn justify-center m-4">
        <CategoryButton title="Lanche do dia" />
        <CategoryButton title="Lanche do dia" />
        <CategoryButton title="Lanche do dia" />
      </View>
    </View>
  );
}
