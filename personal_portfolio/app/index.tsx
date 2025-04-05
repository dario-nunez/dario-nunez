import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-blue-600 dark:text-sky-400">Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
