import React from 'react'
import {View, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    powderblue: {
        backgroundColor: 'powderblue',
    },
    skyblue: {
        backgroundColor: 'skyblue',
    },
    steelblue: {
        backgroundColor: 'steelblue',
    },
    basic: {
        width: 50,
        height: 50,
    }
})

export default class SecondTestView extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <View style={[styles.basic, styles.powderblue]} />
                <View style={[styles.basic, styles.skyblue]} />
                <View style={[styles.basic, styles.steelblue]} />
            </View>
        )
    }
}