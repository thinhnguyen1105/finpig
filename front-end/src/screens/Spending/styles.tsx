import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { View } from 'native-base';

const container: ViewStyle = {
    // paddingHorizontal: '10%',
    // alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 20
}

const button: ImageStyle = {
    height: 120,
    width: 120,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddd',
    borderRadius: 60
}

const row: ViewStyle = {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20, flex: 1,
    paddingVertical: 20 
}
export default {
    button,
    container,
    row
}