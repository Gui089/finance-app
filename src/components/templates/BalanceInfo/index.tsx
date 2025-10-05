import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, Text, View } from "react-native";
import { Divider } from "../../Divider";
import { ProgressBar } from "../../ProgressBalance";


export function BalanceInfo() {
  return (
    <View>
      <View style={styles.container}>
        <View>
          <View style={styles.expensiveDiv}>
            <Ionicons name="arrow-up-right-box-outline" size={14} />
            <Text>
              Saldo Total
            </Text>
          </View>
          <Text style={styles.balance}>
            R$ 7.200,00
          </Text>
        </View>

        <Divider />

        <View>
          <View style={styles.expensiveDiv}>
            <Ionicons name="arrow-down-right-box-outline" size={14} />
            <Text>
              Despesa Total
            </Text>
          </View>
          <Text style={styles.expensive}>
            -R$ 7.20,00
          </Text>
        </View>
      </View>
      <ProgressBar />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 41,
    marginHorizontal: 51,
    alignSelf: 'center',
    gap: 24
  },
  expensiveDiv: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginBottom: 4
  },
  balance: {
    color: 'white',
    fontSize: 22,
    fontWeight: '700',
  },
  expensive: {
    color: '#0068FF',
    fontSize: 22,
    fontWeight: '700',
  }
});