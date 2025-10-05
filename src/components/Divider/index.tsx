import { StyleSheet, View } from "react-native";


export function Divider() {
  return (
    <View style={styles.container}/>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'white',
    height:42,
    width:1
  }
});