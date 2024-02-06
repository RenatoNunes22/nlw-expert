import { ActivityIndicator, View, StyleSheet } from "react-native";
import colors from "tailwindcss/colors";

export function Loading() {
  return (
    <View
      style={[styles.container, styles.horizontal]}
      className="flex-1 justify-center items-center bg-slate-900"
    >
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
