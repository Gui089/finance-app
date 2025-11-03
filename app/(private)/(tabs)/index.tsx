import { BalanceInfo } from '@/src/components/templates/BalanceInfo';
import { FooterScreen } from '@/src/components/templates/FooterScreen';
import { Header } from '@/src/components/templates/Header';
import { Theme } from '@/src/theme/theme';
import { useTheme } from '@shopify/restyle';
import { View } from 'react-native';

export default function Login() {

const theme = useTheme<Theme>();

  return (
    <View style={{backgroundColor:theme.colors.primary, flex:1}}>
      <Header />
      <BalanceInfo />
      <FooterScreen />
    </View>
  );
}