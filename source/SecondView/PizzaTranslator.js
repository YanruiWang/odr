import React from 'react'
import {View, TextInput, Text} from 'react-native'

export default class PizzaTranslator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
    this.textRef = React.createRef();
  }

  componentDidMount() {
      this.textRef.focus()
  }

    render() {
        return (
            <View style={{padding: 10}}>
                <TextInput
                    style={{height: 40}}
                    placeholder="Type here to translate!"
                    onChangeText={(text) => this.setState({text})}
                    value={this.state.text}
                    ref={(ref) => {
                        this.textRef = ref
                    }}
                />
                <Text style={{padding: 10, fontSize: 42}}>
                    {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>
        );
    }

    componentWillUnmount(): void {
        this.props.navigation.state.params.returnData(this.state.text);
    }
}
