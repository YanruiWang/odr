import React from "react";
import {View, Text, Button, SectionList, StyleSheet} from "react-native";
import {createStackNavigator, createAppContainer} from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
import ContactView from './source/ContactView'


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
    },
});


const RowModel = (props) => ({
    key: props.index + "" + false,
    index: props.index,
    title: props.title,
    checked: props.checked,
    onDelete: props.onDelete,
})

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
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />

                <Button
                    title="Go to Contacts"
                    onPress={() => this.props.navigation.navigate('Contacts')}
                />

            </View>
        );
    }
}

const AppNavigator = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
        Contacts: ContactView,
    },
    {
        initialRouteName: "Home"
    }
);

export default createAppContainer(AppNavigator);