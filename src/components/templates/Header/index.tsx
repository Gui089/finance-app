import Ionicons from "@expo/vector-icons/Ionicons";
import { useTheme } from "@shopify/restyle";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";


export function Header() {

  const {bottom, top} = useSafeAreaInsets();
  const theme = useTheme();

  return (
    <View style={[styles.container, {paddingTop:top, paddingHorizontal:bottom}]}>
      <View>
        <Text style={[{color:theme.colors.void}, styles.title]}>
          Olá, Bem vindo(a) De Volta
        </Text>

        <Text  style={[{color:theme.colors.void}, styles.paragraph]}>
          Bom dia
        </Text>
      </View>

      <View style={styles.notific}>
         <Ionicons name="notifications-outline" size={24}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'space-between'
  },
  title:{
    fontSize:16,
    fontWeight:'700',
  },
  paragraph: {
    fontWeight:'300'
  },
  notific:{
    backgroundColor:'white',
    width:34,
    height:34,
    borderRadius:999,
    alignItems:'center',
    justifyContent:'center'
  }
});