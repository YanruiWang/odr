import React from "react";
import {StyleSheet, Text, View} from "react-native";

const style = StyleSheet.create({
    name: {
        marginTop: 20,
        textAlign: "center",
        color: 'red'
    },
    phone: {
        marginTop: 20,
        textAlign: "center",
        color: '#AAAAAA',
    },
})

class ContactDetail extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: '联系人详情',
            headerTintColor: "teal",
            headerStyle: {
                backgroundColor: '#ddd'
            }
        }
    };
    render() {
        return(
            <View>
                <Text style={style.name}>{this.props.navigation.getParam("name")}</Text>
                <Text style={style.phone}>{this.props.navigation.getParam("phone")}</Text>
            </View>
        )
    }
}

export default ContactDetail