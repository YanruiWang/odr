import React from "react";
import {StyleSheet, Text, View} from "react-native";

class ContactDetail extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '联系人详情',
            headerTintColor: "teal",
            headerStyle: {
                backgroundColor: '#ddd'
            }
        }

    }
    render() {
        return(
            <View>
                <Text>{this.props.navigation.getParam("name")}</Text>
                <Text>{this.props.navigation.getParam("phone")}</Text>
            </View>

        )
    }
}

export default ContactDetail