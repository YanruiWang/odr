import React from "react";
import { View, Text, Button, FlatList, StyleSheet } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import DetailsScreen from "./source/DetailScreen"
import Row from "./source/Row"

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
    
  }


  constructor() {
    super()
    this.state = {
      count: 0,
      model: []
    }
  }

  deleteATodo(index) {
    const newList = this.state.model.filter((singleModel) => singleModel.index !== index)
    this.setState({
      model: newList,
    })
  }

  addATodo() {
    let todo = new RowModel({title: this.state.count + 1 + "", index: this.state.count + 1, checked: false})
    this.setState(preState => ({
      count: preState.count + 1,
      model: [...preState.model, todo],
    }))
  }

  toggleItem(index) {
    let itemToToggle = this.state.model.filter((singleItem) => singleItem.index === index)[0]
    let arrayIndex = this.state.model.indexOf(itemToToggle)
    itemToToggle.checked = !itemToToggle.checked
    
    this.setState({model: this.state.model})
  }

  genrateItem(origninal) {
    return (
      <Row 
        title={origninal.title} 
        isOn={origninal.checked}
        onDelete={() => {this.deleteATodo(origninal.index)}}
        onToggle={() => {this.toggleItem(origninal.index)}}
      />
    )
  }

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
          onPress={() => this.addATodo()}
        />
        <FlatList
          style={styles.container}
          data={this.state.model}
          renderItem={({item}) => this.genrateItem(item)}
          extraData={this.state}
        />
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