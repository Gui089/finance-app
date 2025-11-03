import { createTheme } from "@shopify/restyle";

const pallet = {
  honeydew: '#F1FFF3',
  lightgreen: '#0E3E3E',
  caribbeangreen: '#052224',
  cyprus: '#093030',
  fencegreen: '#052224',
  void: '#DFF7E2',
  lightblue: '#6DB6FE',
  vividblue: '#3299FF',
  oceanblue: '#0068FF',
  maingreen: '#00D09E'
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
    oceanblue:pallet.oceanblue,
    main:pallet.maingreen
  },
  spacing: {
     default:16,
  },
});


export type Theme = typeof theme;
export default theme;