import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SelectScreen from "../selectScreen";
import MoodExp from "../moodExp";

const screens = {
  SelectScreen: {
    screen: SelectScreen,
  },
  MoodExp: {
    screen: MoodExp,
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);