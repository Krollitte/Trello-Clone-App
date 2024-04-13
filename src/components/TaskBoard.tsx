import { SafeAreaView, View } from "react-native";
import { TaskList } from "./TaskList";
import { LinearGradient } from "expo-linear-gradient";

export function TaskBoard() {
  return (
    <View className="flex-1 p-2 5">
      <LinearGradient
        colors={["#8711c1", "#2472fc"]}
        className="absolute top-0 bottom-0 left-0 right-0"
      >
        <SafeAreaView>
          <TaskList />
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
}
