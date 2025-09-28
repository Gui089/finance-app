import { createTheme } from "@shopify/restyle";

const pallet = {
  honeydew: '#F1FFF3',
  lightgreen: '#DFF7E2',
  caribbeangreen: '#00D09E',
  cyprus: '#0E3E3E',
  fencegreen: '#052224',
  void: '#031314',
  lightblue: '#6DB6FE',
  vividblue: '#3299FF',
  oceanblue: '#0068FF'
}

const theme = createTheme({
  colors: {
    primary:pallet.caribbeangreen,
    secondary:pallet.honeydew,
    lightgreen:pallet.lightgreen,
    cyprus:pallet.cyprus,
    fencegreen:pallet.fencegreen,
    void:pallet.void,
    lightblue:pallet.lightblue,
    vividblue:pallet.vividblue,
    oceanblue:pallet.oceanblue
  },
  spacing: {
     default:16,
  },
});


export type Theme = typeof theme;
export default theme;