import React from "react";
import {StyleSheet, Text} from "react-native";

const styles = StyleSheet.create({
    header: {
        marginTop: 15,
        marginBottom: 20,
    },
})

class ContactHeader extends React.Component {
    render() {
        return(<Text style={styles.header}>{this.props.name}</Text>)
    }
}

export default ContactHeader;