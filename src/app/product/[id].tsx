import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";

export default function Product() {
  const { id } = useLocalSearchParams();
  const product = PRODUCTS.filter((product) => product.id === id)[0];

  return (
    <View className="flex-1 mt-5 ">
      <Image
        source={product.cover}
        style={{ width: "90%", height: 200 }}
        className="rounded-md mx-5"
        resizeMode="cover"
      />
      <View className="p-5 mt-8 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-2">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 text-base font-body leading-6 mb-6">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient, index) => (
          <Text
            key={index}
            className="text-slate-400 text-base font-body leading-6"
          >
            {"\u2022"}
            {ingredient}
          </Text>
        ))}
      </View>
      <View className="p-5 pb-8 gap-5">
        <Button
          className="bg-lime-400 rounded-md items-center justify-center"
          onPress={() => {}}
        >
          <Button.Icon>
            <Feather name="plus-circle" size={20} />
          </Button.Icon>
          <Button.Text>Adicionar ao carrinho</Button.Text>
        </Button>
      </View>
    </View>
  );
}
