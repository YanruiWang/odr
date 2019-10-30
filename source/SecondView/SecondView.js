import React from 'react'
import {View, Button, Text, StyleSheet} from "react-native"

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
    },
});

class SecondView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        }
    }

    newNameEdited(name) {
        this.setState({
            name: name,
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text >{this.state.name}</Text>
                <Button
                    title="Go to Alignment"
                    onPress={() => this._goToAlignment()}
                />
                <Button
                    title="Go to justify content"
                    onPress={() => this._goToJustifyContent()}
                />
                <Button
                    title="Go to Pizza"
                    onPress={() => this._goToPizza()}
                />
                <Button
                    title="Go to Useless"
                    onPress={() => this._goToUseless()}
                />
            </View>
        )
    }

    _goToAlignment = () => {
        this.props.navigation.push('Alignment');
    };

    _goToJustifyContent = () => {
        this.props.navigation.push('JustifyContent');
    };

    _goToPizza = () => {
        // this.props.navigation.push('Pizza');
        this.props.navigation.push('Pizza', {newNameEdited: this.newNameEdited.bind(this)});
    };

    _goToUseless = () => {
        this.props.navigation.push('Useless');
    }
}

export default SecondView
