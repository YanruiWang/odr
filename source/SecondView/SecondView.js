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
            </View>
        )
    }

    _goToAlignment = () => {
        this.props.navigation.push('JustifyContent');
    }

    _goToJustifyContent = () => {
        this.props.navigation.push('Alignment');
    }
}

export default SecondView