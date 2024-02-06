import { CategoryButton } from "@/components/categoryButton";
import { Header } from "@/components/header";
import { View, FlatList } from "react-native";
import { CATEGORIES } from "@/utils/data/products";
import { useState } from "react";

export default function Home() {
  const [categorySelected, setCategorySelected] = useState<string>(
    CATEGORIES[0]
  );

  function handleCategorySelect(selectedCategory: string) {
    setCategorySelected(selectedCategory);
  }

  return (
    <View className="bg-slate-900 flex-1 pt-8">
      <Header title="Faca seu pedido" cartQuantity={3} />
      <FlatList
        className="max-h-10 mt-4"
        data={CATEGORIES}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CategoryButton
            title={item}
            isSelected={item === categorySelected}
            onPress={() => handleCategorySelect(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 12, paddingHorizontal: 20 }}
      />
    </View>
  );
}
