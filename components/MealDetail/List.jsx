import { View, Text, StyleSheet } from "react-native";

const List = ({ dataList }) => {
  return dataList.map((item) => (
    <View key={item} style={styles.container}>
      <Text style={styles.text}>{item}</Text>
    </View>
  ));
};

export default List;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
  text: {
    color: "#351401",
  },
});
