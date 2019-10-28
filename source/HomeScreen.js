import React from "react";
import {Button, Text, View} from "react-native";
import {NativeModules} from 'react-native'

class HomeScreen extends React.Component {

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
                    title="Go to Second"
                    onPress={() => this._goToSecond()}
                />
            </View>
        );
    }

    _goToContacts = () => {
        this.props.navigation.push('Contacts');
    }

    _goToSecond = () => {
        this.props.navigation.push('Second');
    }
}

export default HomeScreen;
