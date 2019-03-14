import I18n from 'ex-react-native-i18n';
import en from './languages/en.json';
import da from './languages/da.json';

I18n.fallbacks = true;

I18n.translations = {
    en,
    da
};

export default I18n;