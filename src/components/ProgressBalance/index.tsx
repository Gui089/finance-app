import { StyleSheet, Text, View } from "react-native";


export function ProgressBar() {
  return (
    <View style={{marginTop:20}}>
      <View style={styles.container}>
        <Text style={styles.pecentText}>30%</Text>
        <View style={styles.balanceContainer}>
           <Text style={styles.balanceText}>R$20,000.00</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#031314',
    width: '79%',
    height: 27,
    borderRadius: 49,
    alignSelf: 'center'
  },
  balanceContainer: {
    backgroundColor: 'white',
    width: '70%',
    height: 27,
    position: 'absolute',
    borderRadius: 49,
    right: 0
  },
  pecentText:{
    color:'white',
    padding:5,
    paddingHorizontal:20
  },
  balanceText:{
    alignSelf:'flex-end',
    padding:5,
    paddingHorizontal:10
  }
});