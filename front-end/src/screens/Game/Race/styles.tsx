import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import { getLayout } from '../../../helpers/get-layout';

const container: ViewStyle = {
    // paddingHorizontal: '10%',
    // alignItems: 'center',
    // justifyContent: 'center',
    // flex: 1,
    height: getLayout().deviceHeight,
    // backgroundColor: '#ddd'
}

const image: ImageStyle = {
    flex: 1,
    // height: getLayout().deviceHeight,

    // backgroundColor: '#ddd',
}
const imageContainer: ViewStyle = {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: 8,
}
export default {
    container,
    image,
    imageContainer
}