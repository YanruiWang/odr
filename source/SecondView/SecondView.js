import React from 'react'
import {View, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    center: {
        flex:1,
        justifyContent: 'center',
        flexDirection: 'column',
        width:50,
    },
    end: {
        flex:1,
        justifyContent: 'flex-end',
        flexDirection: 'column',
        width:50,
    },
    start: {
        flex:1,
        justifyContent: 'flex-start',
        flexDirection: 'column',
        width:50,
    },
    lower: {
        flex:1,
        flexDirection: 'row',
    },
})

class JustifyContentExample extends React.Component {
    render() {
        return (
            <View style={this.props.style}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        )
    }
}

class SecondView extends React.Component {
    render() {
        return (
            <View style={[styles.lower]}>
                <JustifyContentExample style={[styles.center]}/>
                <JustifyContentExample style={[styles.end]}/>
                <JustifyContentExample style={[styles.start]}/>
            </View>
        )
    }
}

export default SecondView