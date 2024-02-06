import { View, Image, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/linkButton";

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
      <View className="p-5 flex-1">
        <Text className="text-lime-400 text-2xl font-heading my-1">
          {formatCurrency(product.price)}
        </Text>
        <Text className="text-slate-400 text-base font-body leading-6 mb-3">
          {product.description}
        </Text>
        {product.ingredients.map((ingredient, index) => (
          <Text
            key={index}
            className="text-slate-400 text-base font-body leading-5 bg-slate-800 p-1 rounded-md"
          >
            {"\u2022"}
            {ingredient}
          </Text>
        ))}
        <View className="flex-1 flex-row justify-between mt-5">
          {/* <View
            //style={{ width: "45%" }}
            className="h-12 px-6 bg-lime-400 rounded-md items-center justify-center flex-row"
          >
            <LinkButton href="/" title="Voltar ao cardapio" />
          </View> */}
          <Button
            className="bg-lime-400 rounded-md items-center w-full justify-center"
            onPress={() => {}}
          >
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>
            <Button.Text>Adicionar ao carrinho</Button.Text>
          </Button>
        </View>
      </View>
    </View>
  );
}
