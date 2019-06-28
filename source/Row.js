import React from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
    }
})

class Row extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOn: props.isOn,
        }
    }

    render() {
        return( 
            <View style={styles.container}>
                <Text>{this.props.title}</Text>
                <Button title="detete" onPress={this.props.onDelete}/>
                <Switch onValueChange={this.props.onToggle} value={this.props.isOn}/>
            </View>
        )
    }
}
    
  
export default Row;