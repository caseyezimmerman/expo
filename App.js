import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import List from './src/containers/List'
import { Provider, connect } from 'react-redux'; // 5.0.6
import { createStore, combineReducers } from 'redux';
import rootReducer from './src/reducers/rootReducer';


const store = createStore(rootReducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <List />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
