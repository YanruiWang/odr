import React from "react";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
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