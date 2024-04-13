import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const TaskDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View className="p-2.5">
      <Stack.Screen options={{ title: "Task Detail" }} />
      <Text className="text-white text-lg">Id: {id}</Text>
    </View>
  );
};

export default TaskDetails;
