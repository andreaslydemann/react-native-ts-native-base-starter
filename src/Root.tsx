import {Font, AppLoading} from 'expo';
import React, { Component } from "react";
import {AppScreen} from "./screens";

interface State {
  isReady: boolean;
}

export default class Root extends Component<void, State> {
  constructor() {
    super();
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
      Ionicons: require('native-base/Fonts/Ionicons.ttf'),
      Entypo: require("native-base/Fonts/Entypo.ttf"),
      Feather: require("native-base/Fonts/Feather.ttf"),
      FontAwesome: require("native-base/Fonts/FontAwesome.ttf"),
      Octicons: require("native-base/Fonts/Octicons.ttf"),
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return <AppScreen />;
  }
}