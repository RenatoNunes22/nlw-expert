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

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <Loading />;
  }

  return (
    <SafeAreaView className="bg-slate-900 flex-1">
      <Header title="Faça seu pedido" cartQuantity={3} />
      <Slot />
    </SafeAreaView>
  );
}
