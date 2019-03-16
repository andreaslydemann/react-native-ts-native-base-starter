import { createStackNavigator, createAppContainer } from "react-navigation";
import { CounterScreen } from "../screens/";

// https://github.com/janhesters/ReactNative-ComplexNavigation/blob/master/app/navigation/Navigator.tsx
const RootStack = createStackNavigator({ CounterScreen });
const Navigator = createAppContainer(RootStack);

export default Navigator;
