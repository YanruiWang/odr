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
import PizzaTranslator from "./source/SecondView/PizzaTranslator"
import UselessTextInput from './source/SecondView/UselessTextInput'

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Contacts: ContactView,
        Detail: ContactDetail,
        Second: SecondView,
        JustifyContent: JustifyContentView,
        Alignment: AlignmentTestView,
        Pizza: PizzaTranslator,
        Useless: UselessTextInput,
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
