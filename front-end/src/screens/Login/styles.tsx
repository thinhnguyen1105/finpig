import { ViewStyle, TextStyle } from "react-native";
import { View } from 'native-base';

const container: ViewStyle = {
    paddingHorizontal: '15%',
    paddingTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
}
const logoContainer: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: '12%'
}

const text: TextStyle = {
    fontSize: 12,
    paddingHorizontal: 2
}

const textInputContainer: ViewStyle = {
    backgroundColor: '#ededed',
    marginVertical: 3,
    borderRadius: 5,
    paddingVertical: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
}
const textInput: ViewStyle & TextStyle = {
    borderLeftColor: '#000',
    borderLeftWidth: 1,
    height: 35,
    fontSize: 14,
    fontFamily: 'iciel-regular'

}
export default {
    text,
    container,
    textInput,
    textInputContainer,
    logoContainer
}