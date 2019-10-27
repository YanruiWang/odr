import React from "react";
import {createAppContainer, createStackNavigator} from "react-navigation";
import HomeScreen from "./source/HomeScreen"
import { Provider } from 'react-redux';
import {store} from "./source/store"
import ContactDetail from './source/Contact/ContactDetail'
import ContactView from './source/Contact/ContactView'
import SecondView from './source/SecondView/SecondView'
import JustifyContentView from "./source/SecondView/JustifyContentTest";
import AlignmentTestView from "./source/SecondView/AlignmentTest";

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Contacts: ContactView,
        Detail: ContactDetail,
        Second: SecondView,
        JustifyContent: JustifyContentView,
        Alignment: AlignmentTestView,
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
                
                <Navigation/>
                
            </Provider>
        );
    }
}