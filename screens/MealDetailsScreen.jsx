import { View, Text } from "react-native";

const MealDetailsScreen = ({ route }) => {
  const mealId = route.params.mealId;

  return (
    <View>
      <Text>This is the Meal Detail Screen - {mealId}</Text>
    </View>
  );
};

export default MealDetailsScreen;
