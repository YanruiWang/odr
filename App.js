import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./source/HomeScreen"
import { Provider } from 'react-redux';
import {store, persistor} from "./source/store"
import { PersistGate } from 'redux-persist/integration/react'
import WaiterScreen from "./source/Waiter/WaiterScreen";
import ContactDetail from './source/Contact/ContactDetail'
import ContactView from './source/Contact/ContactView'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Waiter: WaiterScreen,
        Contacts: ContactView,
        Detail: ContactDetail,
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