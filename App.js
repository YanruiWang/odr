import React from "react";
import { View, Text, Button, SectionList, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
import Row from "./source/Row"
import RandomContact from '/source/RandomContact'

// import console = require("console");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});


const RowModel = (props) => ({
  key: props.index + "" + false,
  index: props.index,
  title: props.title,
  checked: props.checked,
  onDelete: props.onDelete,
})

class HomeScreen extends React.Component {



  componentDidMount() {
    const pp = RandomContact
  }


  constructor() {
    super();
    this.state = {
      count: 0,
      model: []
    }
  }

  /**
    _generateHeader(original) {
        return <Text>{original.title}</Text>
    }

  _deleteItem(index) {
    const newList = this.state.model.filter((singleModel) => singleModel.index !== index);
    this.setState({
      model: newList,
    })
  }

  _addItem() {
    let todo = new RowModel({title: this.state.count + 1 + "", index: this.state.count + 1, checked: false});
    this.setState(preState => ({
      count: preState.count + 1,
      model: [...preState.model, todo],
    }))
    this.state.model.reduce((previousValue, nextValue) => {}, {})
  }

  _toggleItem(index) {
    let itemToToggle = this.state.model.filter((singleItem) => singleItem.index === index)[0];
    let arrayIndex = this.state.model.indexOf(itemToToggle);
    itemToToggle.checked = !itemToToggle.checked
    
    this.setState(preState => ({model: [...preState.model]}))
  }

  _generateItem(original) {
    return (
      <Row 
        title={original.title}
        isOn={original.checked}
        onDelete={() => {this._deleteItem(original.index)}}
        onToggle={() => {this._toggleItem(original.index)}}
      />
    )
  }
   */

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
        <Button 
          title="add a todo"
          onPress={() => this._addItem()}
        />
        /**
        <SectionList
          style={styles.container}
          renderItem={({item}) => this._generateItem(item)}
          renderSectionHeader={({section}) => this._generateHeader(section)}
          sections={[{
            title: 'A',
            data: this.state.model,
          }]}
        />
        **/
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);