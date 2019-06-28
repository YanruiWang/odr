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
  key: props.index + "",
  index: props.index,
  title: props.title,
  checked: false,
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
    let todo = new RowModel({title: this.state.count + 1 + "", index: this.state.count + 1})
    this.setState(preState => ({
      count: preState.count + 1,
      model: [...preState.model, todo],
    }))
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
          // renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
          renderItem={
            ({item}) => 
            (<Row title={item.title} onDelete={() => {this.deleteATodo(item.index)}}/>)
          }
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