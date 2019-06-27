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

const Row = (props) => (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <Button title="detete" />
      <Switch />
    </View>
  );
  
  export default Row;