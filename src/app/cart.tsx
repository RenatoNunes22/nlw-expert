import { View, Text, ScrollView, Alert, Linking } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Product } from "@/components/product";
import { ProductCartProps, useCartStore } from "@/stores/cart-store";
import { formatCurrency } from "@/utils/format-currency";
import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { Feather } from "@expo/vector-icons";
import { LinkButton } from "@/components/linkButton";
import { useState } from "react";
import { useNavigation } from "expo-router";

const PHONE_NUMBER = "YOUR_PHONE_NUMBER";

export default function Cart() {
  const [address, setAddress] = useState("");
  const cartStore = useCartStore();
  const navigate = useNavigation();
  const total = formatCurrency(
    cartStore.products.reduce(
      (acc, product) => acc + product.price * product.quantity,
      0
    )
  );

  function handleProductsRemove(product: ProductCartProps) {
    Alert.alert(
      "Remover produto",
      `Deseja remover ${product.title} do carrinho?`,
      [
        {
          text: "Cancelar",
        },
        {
          text: "Remover",
          onPress: () => cartStore.remove(product.id),
        },
      ]
    );
  }

  function handleOrder() {
    if (address.trim().length === 0) {
      return Alert.alert(
        "Endereço de entrega",
        "Informe o endereço de entrega para finalizar o pedido"
      );
    }
    const products = cartStore.products
      .map((product) => `\n ${product.quantity} ${product.title}`)
      .join("");

    const message = `
    🍔 NOVO PEDIDO
    \n Entrega em: ${address}
    ${products}
    \n Valor total: ${total}
    `;

    Linking.openURL(
      `http://api.whatsapp.com/send?phone=${PHONE_NUMBER}&text=${message}`
    );

    cartStore.clear();
    navigate.goBack();
  }

  return (
    <View className="flex-1 pt-4">
      <KeyboardAwareScrollView>
        <ScrollView className="max-h-full">
          <View className="p-5 flex-1">
            {cartStore.products.length > 0 ? (
              <View className="border-b border-slate-700">
                {cartStore.products.map((product) => (
                  <Product
                    key={product.id}
                    data={product}
                    onPress={() => handleProductsRemove(product)}
                  />
                ))}
              </View>
            ) : (
              <Text className="font-body text-slate-400 text-center my-8">
                Seu carrinho está vazio
              </Text>
            )}
            <View className="flex-1 justify-center items-center">
              <Input
                placeholder="Informe o endereço de entrega com rua, bairro, CEP, número e complemento..."
                onChangeText={setAddress}
                blurOnSubmit={true}
                onSubmitEditing={handleOrder}
                returnKeyType="next"
              />
            </View>
          </View>
        </ScrollView>
      </KeyboardAwareScrollView>
      <View className="p-5 gap-5">
        <View className="flex-row gap-2 items-center justify-end">
          <Text className="text-white font-subtitle text-lg">Total: </Text>
          <Text className="text-lime-400 text-xl font-heading">{total}</Text>
        </View>
        <Button onPress={handleOrder}>
          <Button.Text>Finalizar pedido</Button.Text>
          <Button.Icon>
            <Feather name="arrow-right" size={24} />
          </Button.Icon>
        </Button>
        <LinkButton title="Voltar ao cardapio" href="/" />
      </View>
    </View>
  );
}
