import { Font, Asset } from 'expo';
import files from '../helpers/files';

const preloadFontsAsync = async () => {
    await Font.loadAsync({
        'iciel-bold': require('../../assets/fonts/iCielDINPro-Bold.otf'),
        'iciel-regular': require('../../assets/fonts/iCielDINPro-Regular.otf'),
    });
};

const preloadImagesAsync = async () => {
    const images = [
        files.BackgroundPink,
    ];

    const cacheImages = images.map((image) => {
        return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
};

const preloadAssetsAsync = async () => {
    await Promise.all([
        preloadFontsAsync(),
        preloadImagesAsync()
    ]);
};

export {
    preloadAssetsAsync
};
