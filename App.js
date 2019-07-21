import React from "react";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
import HomeScreen from "./source/HomeScreen"
import { Provider } from 'react-redux';
import store from "./source/store"

const AppNavigator = createBottomTabNavigator(
    {
        Home: HomeScreen,
        Detail: DetailsScreen,
    },
    {
        initialRouteName: "Home"
    }
);


let Navigation = createAppContainer(AppNavigator);


export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Navigation />
            </Provider>
        );
    }
}