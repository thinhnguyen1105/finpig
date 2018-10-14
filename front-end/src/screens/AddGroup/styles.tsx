import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { View } from 'native-base';

const container: ViewStyle = {
    paddingHorizontal: '10%',
    alignItems: 'center',
    // justifyContent: 'center',
}

const button: ImageStyle = {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 60
}

const textInput: ViewStyle = {
    backgroundColor: '#fff'
}

const text: ViewStyle & TextStyle = {
    height: 45,
    fontSize: 14,
    fontFamily: 'iciel-regular'

}
export default {
    button,
    container,
    textInput,
    text
}