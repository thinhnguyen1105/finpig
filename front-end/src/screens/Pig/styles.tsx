import { ViewStyle, TextStyle } from "react-native";

const container: ViewStyle = {
    paddingHorizontal: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
}

const button: ViewStyle = {
    backgroundColor: '#ed82a6',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    width: '100%',
    // marginVertical: '5%'
}

const textButton: TextStyle = {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold'
}
export default {
    container,
    button,
    textButton
}