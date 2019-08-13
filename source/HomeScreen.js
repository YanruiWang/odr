import React from "react";
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "react-navigation";
import ContactView from "./Contact/ContactView";
import ContactDetail from "./Contact/ContactDetail"
import {NativeModules} from 'react-native'

class HomeScreen extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '联系人详情',
            headerTintColor: "teal",
            headerStyle: {
                backgroundColor: '#ddd'
            }
        }
    };

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
            </View>
        );
    }

    _goToContacts = () => {
        this.props.navigation.push('Contacts');
        var rootViewController = NativeModules.RootViewController;
        rootViewController.tapme();
    }
}

const stackNavigator = createStackNavigator({
    Home: HomeScreen,
    Contacts: ContactView,
    Detail: ContactDetail,
});

export default stackNavigator;

// export default HomeScreen;