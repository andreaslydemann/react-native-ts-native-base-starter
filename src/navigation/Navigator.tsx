import { createStackNavigator, createAppContainer } from "react-navigation";
import { HomeScreen } from "../screens/";

// https://github.com/janhesters/ReactNative-ComplexNavigation/blob/master/app/navigation/Navigator.tsx
const RootStack = createStackNavigator({ HomeScreen });
const Navigator = createAppContainer(RootStack);

export default Navigator;
