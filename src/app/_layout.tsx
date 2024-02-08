import { SafeAreaView } from "react-native";
import { Slot } from "expo-router";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts,
} from "@expo-google-fonts/inter";
import { Loading } from "@/components/loading";
import { Header } from "@/components/header";
import { useCartStore } from "@/stores/cart-store";
import { usePathname } from "expo-router";

export default function Layout() {
  const route = usePathname();
  const cartStore = useCartStore();
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  console.log();

  const cartQuantity = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <Header
        title={route === "/cart" ? "Seu carrinho" : "Faça seu pedido"}
        cartQuantityItems={cartQuantity}
      />
      <Slot />
    </SafeAreaView>
  );
}
