import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { ImageSource } from 'react-native-vector-icons/Icon';
import { getLayout } from '../../../helpers/get-layout';

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
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold'
}

const image: ImageStyle = {
    height: getLayout().deviceWidth / 2 - 70,
    // flex: 1,
    width: getLayout().deviceWidth / 2 - 60
}

const imageContainer: ViewStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: '5%'
}

const checkbox: ViewStyle = {
    marginRight: 16,
    marginTop: 4
}
export default {
    checkbox,
    container,
    button,
    textButton,
    image,
    imageContainer
}