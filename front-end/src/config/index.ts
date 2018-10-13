
const defaultConfig = {
    primaryColor: '#ed82a6',
    backgroundColor: '#FFF',
    dateFormat: 'YYYY-MM-DD',
    currentTimeFormat : 'YYYY-MM-DD',
    supportedLanguages: [{
        code: 'en',
        text: 'English'
    }, {
        code: 'vi',
        text: 'Tiếng Việt'
    }]
};

const config = () => defaultConfig;

export default config;
