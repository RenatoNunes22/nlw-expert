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

export default function Layout() {
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

  const cartQuantity = cartStore.products.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <Header title="Faça seu pedido" cartQuantityItems={cartQuantity} />
      <Slot />
    </SafeAreaView>
  );
}
