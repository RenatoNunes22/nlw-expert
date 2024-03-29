import { View, Image, Text } from "react-native";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { PRODUCTS } from "@/utils/data/products";
import { formatCurrency } from "@/utils/format-currency";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/linkButton";
import { useCartStore } from "@/stores/cart-store";
import { Redirect } from "expo-router";

export default function Product() {
  const { id } = useLocalSearchParams();
  const cartStore = useCartStore();
  const navigation = useNavigation();
  const product = PRODUCTS.find((product) => product.id === id);

  function handleAddCart() {
    cartStore.add(product!);
    navigation.goBack();
  }

  if (!product) return <Redirect href="/" />;

  return (
    <View className="flex-1 mt-5">
      <Image
        source={product.cover}
        style={{ width: "90%", height: 180 }}
        className="rounded-md mx-5"
        resizeMode="cover"
      />

      <View className="p-5 flex-1">
        <Text className="text-white text-xl font-heading">{product.title}</Text>
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
        <View className="py-6 px- 0 pb-8 gap-5">
          <Button onPress={handleAddCart}>
            <Button.Icon>
              <Feather name="plus-circle" size={20} />
            </Button.Icon>
            <Button.Text>Adicionar ao carrinho</Button.Text>
          </Button>
          <LinkButton href="/" title="Voltar ao cardapio" />
        </View>
      </View>
    </View>
  );
}
