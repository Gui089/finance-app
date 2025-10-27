import { useTheme } from "@shopify/restyle";
import { StyleSheet, Text, View } from "react-native";


export function CardDashboard() {

    const theme = useTheme();

    return (
        <View style={{backgroundColor:theme.colors.primary}}> 
            <Text>
                CarDashboard
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
   container:{

   }
});