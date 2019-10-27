import React from 'react'
import {View, StyleSheet} from "react-native"
import SecondTestView from './SecondTestView'

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



class JustifyContentView extends React.Component {
    render() {
        return (
            <View style={[styles.lower]}>
                <SecondTestView style={[styles.center]}/>
                <SecondTestView style={[styles.end]}/>
                <SecondTestView style={[styles.start]}/>
            </View>
        )
    }
}

export default JustifyContentView