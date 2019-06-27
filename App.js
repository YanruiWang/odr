import React from "react";
import { View, Text, Button, ListView, StyleSheet } from "react-native";
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

class CountLabel extends React.Component {
  render() {
    return (
      <Text>{this.props.count}</Text>
    )
  }
}

const RowModel = (props) => ({
  title: props.title,
  checked: false,
})

class HomeScreen extends React.Component {

  componentDidMount() {
    
  }


  constructor() {
    super()
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      count: 0,
      dataSource: ds.cloneWithRows([]),
      model: []
    }
  }

  addATodo() {
    let todo = new RowModel({title: this.state.count + 1})
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.setState(preState => ({
      count: preState.count + 1,
      model: [...preState.model, todo],
      dataSource: ds.cloneWithRows([...preState.model, todo]),
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
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(data) => <Row title={data.title} />}
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