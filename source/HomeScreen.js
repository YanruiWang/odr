import React from "react";
import {Button, Text, View} from "react-native";
import {NativeModules} from 'react-native'

class HomeScreen extends React.Component {

    

    componentDidMount() {
        
    }

    constructor() {
        super();
        this.state = {
            count: 0,
            model: []
        }
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Contacts"
                    onPress={() => this._goToContacts()}
                />
                <Button
                    title="Go to Waiter"
                    onPress={() => this._goToWaiter()}
                />
            </View>
        );
    }

    _goToContacts = () => {
        this.props.navigation.push('Contacts');
        var rootViewController = NativeModules.RootViewController;
        rootViewController.tapme();
    }

    _goToWaiter = () => {
        this.props.navigation.push('Waiter');
        var rootViewController = NativeModules.RootViewController;
        rootViewController.tapme();
    }
}

export default HomeScreen;
