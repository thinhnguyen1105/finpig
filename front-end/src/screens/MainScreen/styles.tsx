import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { View } from 'native-base';

const container: ViewStyle = {
    paddingHorizontal: '15%',
    paddingTop: 50,
    alignItems: 'center',
    // justifyContent: 'center',
    flex: 1
}

const button: ImageStyle = {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 60
}
export default {
    button,
    container,
}