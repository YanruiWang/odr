import React from "react";
import {createAppContainer, createBottomTabNavigator} from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
import HomeScreen from "./source/HomeScreen"
import { Provider } from 'react-redux';
import {store, persistor} from "./source/store"
import { PersistGate } from 'redux-persist/integration/react'

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
                <PersistGate loading={null} persistor={persistor}>
                    <Navigation/>
                </PersistGate>
            </Provider>
        );
    }
}