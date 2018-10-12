import { Dimensions } from 'react-native';

export const getLayout = () => {
    const { width, height } = Dimensions.get('window');
    const inPortraitMode = width < height;
    const sidebarWidth = width <= 300 ? width - 50 : 300;

    return {
        deviceWidth: width,
        deviceHeight: height,
        sidebarWidth,
        inPortraitMode,
    };
};
