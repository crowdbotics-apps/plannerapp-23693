import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList190541Navigator from '../features/ArticleList190541/navigator';
import ArticleList190540Navigator from '../features/ArticleList190540/navigator';
import ArticleList190539Navigator from '../features/ArticleList190539/navigator';
import BlankScreen0190538Navigator from '../features/BlankScreen0190538/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList190541: { screen: ArticleList190541Navigator },
ArticleList190540: { screen: ArticleList190540Navigator },
ArticleList190539: { screen: ArticleList190539Navigator },
BlankScreen0190538: { screen: BlankScreen0190538Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
