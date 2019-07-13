import React from "react";
import {Button, Text, View} from "react-native";
import {createStackNavigator} from "react-navigation";
import ContactView from "./Contact/ContactView";
import ContactDetail from "./Contact/ContactDetail"

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
                    onPress={() => this.props.navigation.push('Contacts')}
                />

            </View>
        );
    }
}

const stackNavigator = createStackNavigator({
    Home: HomeScreen,
    Contacts: ContactView,
    Detail: ContactDetail,
})

export default stackNavigator;