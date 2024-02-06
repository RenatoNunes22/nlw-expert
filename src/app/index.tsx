import { CategoryButton } from "@/components/categoryButton";
import { Header } from "@/components/header";
import { View, FlatList, SectionList, Text } from "react-native";
import { CATEGORIES, MENU } from "@/utils/data/products";
import { useState, useRef } from "react";
import { Product } from "@/components/product";
import { Link } from "expo-router";
export default function Home() {
  const [categorySelected, setCategorySelected] = useState<string>(
    CATEGORIES[0]
  );

  const sectionListRef = useRef<SectionList>(null);

  function handleCategorySelect(selectedCategory: string) {
    setCategorySelected(selectedCategory);

    const sectionIndex = CATEGORIES.findIndex(
      (category) => category === selectedCategory
    );
    if (sectionListRef.current)
      sectionListRef.current.scrollToLocation({
        sectionIndex,
        itemIndex: 0,
        animated: true,
        viewOffset: 20,
      });
  }

  return (
    <View className="bg-slate-900 flex-1 pt-8">
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
      <SectionList
        ref={sectionListRef}
        className="flex-1 px-5 mt-3"
        sections={MENU}
        keyExtractor={(item) => item.id}
        stickySectionHeadersEnabled={false}
        renderItem={({ item }) => (
          <Link href={`/product/${item.id}`} asChild>
            <Product data={item} />
          </Link>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text className="text-xl text-white font-heading mt-8 mb-3">
            {title}
          </Text>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </View>
  );
}
