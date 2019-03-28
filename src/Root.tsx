import { Font, AppLoading } from "expo";
import React, { Component } from "react";
import { Root, StyleProvider } from "native-base";
import getTheme from "../theme/components";
import variables from "../theme/variables/commonColor";
import Navigator from "./navigation/Navigator";
import i18n from "i18n-js";
import { Localization } from "expo";
import strings from "./languages/";

i18n.fallbacks = true;
i18n.translations = strings;
i18n.locale = Localization.locale;

interface State {
  isReady: boolean;
}

export default class RootComponent extends Component<any, State> {
  constructor(props: any) {
    super(props);

    this.state = {
      isReady: false
    };
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      Ionicons: require("native-base/Fonts/Ionicons.ttf"),
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      Feather: require("native-base/Fonts/Feather.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      Octicons: require("native-base/Fonts/Octicons.ttf")
    });

    this.setState({ isReady: true });
  }

  render() {
    return !this.state.isReady ? (
      <AppLoading />
    ) : (
      <StyleProvider style={getTheme(variables)}>
        <Root>
          <Navigator />
        </Root>
      </StyleProvider>
    );
  }
}
