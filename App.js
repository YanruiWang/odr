import React from "react";
import {createStackNavigator, createAppContainer, createBottomTabNavigator} from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
import ContactView from './source/ContactView'
import HomeScreen from "./source/HomeScreen"



const AppNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Detail: DetailsScreen,
    },
    {
        initialRouteName: "Home"
    }
);



export default createAppContainer(AppNavigator);