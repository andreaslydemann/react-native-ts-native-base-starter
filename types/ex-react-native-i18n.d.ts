
declare module "ex-react-native-i18n" {
    var fallbacks: boolean;
    var translations: {
        [keys: string]: any;
    };
    var defaultLocale: string;
    var locale: string;
    function currentLocale(): string;
    function initAsync(): any;
    function t(key: "title"): string;
    function t(key: "platform.ios"): string;
    function t(key: "platform.android"): string;
}

declare module "*.json" {
    const value: any;
    export default value;
}