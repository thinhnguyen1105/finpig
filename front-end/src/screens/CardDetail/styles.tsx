import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { View } from 'native-base';

const container: ViewStyle = {
  paddingHorizontal: '15%',
  alignItems: 'center',
  // justifyContent: 'center',
  flex: 1,
}

const button: ImageStyle = {
  height: 100,
  width: 100,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#ddd',
  borderRadius: 60
}

const textCenter: TextStyle = {
  textAlign: 'center',
}
const textCenterBold: TextStyle = {
  textAlign: 'center',
  fontWeight: 'bold',
}
export default {
  button,
  container,
  textCenter,
  textCenterBold
}