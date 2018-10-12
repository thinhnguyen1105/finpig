import { Font, Asset } from 'expo';

const preloadFontsAsync = async () => {
    await Font.loadAsync({
        'iciel-bold': require('../../assets/fonts/iCielDINPro-Bold.otf'),
        'iciel-regular': require('../../assets/fonts/iCielDINPro-Regular.otf'),
    });
};

const preloadAssetsAsync = async () => {
    await Promise.all([
        preloadFontsAsync(),
    ]);
};

export {
    preloadAssetsAsync
};
