import React from 'react'
import {View, StyleSheet} from "react-native"
import SecondTestView from './SecondTestView'

const styles = StyleSheet.create({
    stretch: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
    },
    end: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
    start: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    lower: {
        flex:1,
        flexDirection: 'row',
    },
    powderblue: {
        flex: 1,
        backgroundColor: 'powderblue',
    },
    skyblue: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    steelblue: {
        flex: 1,
        backgroundColor: 'steelblue',
    },
})

class ThirdTestView extends React.Component {
  render() {
    return (
      <View style={this.props.style}>

      </View>
    )
  }
}


class AlignmentTestView extends React.Component {
    render() {
        return (
          <View
          style={styles.stretch}>
              <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
              <View style={{height: 50, backgroundColor: 'skyblue'}} />
              <View style={{height: 100, backgroundColor: 'steelblue'}} />
          </View>
        )
    }
}

export default AlignmentTestView
