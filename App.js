import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import {SideMenu} from './src/components/SideMenu';
import Home from './src/components/menuScreen/Home';
import Courses from './src/components/menuScreen/Courses'
import SuccessStories from './src/components/menuScreen/SuccessStories';
import WriteReview from './src/components/menuScreen/WriteReview'
import Categories from './src/components/menuScreen/Categories';
import HelpCenter from './src/components/menuScreen/HelpCenter'
const navOptionHandler = () => ({
  headerShown: false,
});

const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={navOptionHandler}
      />
      
    </Stack.Navigator>
  );
}


const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <SideMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="Courses"
        component={Courses}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="SuccessStories"
        component={SuccessStories}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="WriteReview"
        component={WriteReview}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="Categories"
        component={Categories}
        options={navOptionHandler}
      />
      <Drawer.Screen
        name="HelpCenter"
        component={HelpCenter}
        options={navOptionHandler}
      />
    </Drawer.Navigator>
  );
}

const StackApp = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="HomeApp">
        <StackApp.Screen
          name="HomeApp"
          component={DrawerNavigator}
          options={navOptionHandler}
        />
        
      </StackApp.Navigator>
    </NavigationContainer>
  );
}
