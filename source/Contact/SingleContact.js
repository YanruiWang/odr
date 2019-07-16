import React from "react";
import {StyleSheet, Text, TouchableOpacity} from "react-native";

const styles = StyleSheet.create({
    contacts: {
        padding: 15,
    },
})

class SingleContact extends React.Component {

    constructor(props) {
        super(props);
        this.props.onSelectContact = props.onSelectContact
    }

    _showContactDetail = () => {
        this.props.onSelectContact(this.props.name, this.props.phone)
    }

    render() {
        return (
            <TouchableOpacity style={styles.contacts} onPress={this._showContactDetail}>
                <Text>{this.props.name}</Text>
                <Text>{this.props.phone}</Text>
            </TouchableOpacity>
        )
    }
}

export default SingleContact;