import React from 'react'
import {View, Button} from "react-native"

class SecondView extends React.Component {
    render() {
        return (
            <View >
                <Button
                    title="Go to Alignment"
                    onPress={() => this._goToAlignment()}
                />
                <Button
                    title="Go to justify contnet"
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
    }

    _goToJustifyContent = () => {
        this.props.navigation.push('JustifyContent');
    }

    _goToPizza = () => {
        this.props.navigation.push('Pizza');
    }

    _goToUseless = () => {
        this.props.navigation.push('Useless');
    }
}

export default SecondView
