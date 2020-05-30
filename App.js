import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { createStore } from 'redux'
import { Provider } from 'react-redux'

import { enableScreens } from 'react-native-screens'

import { AppLoading } from 'expo'
import * as Font from 'expo-font'

import rootReducer from './store/reducers/rootReducer'
import ProductNavigator from './navigation/ProductNavigator'

enableScreens()

const store = createStore(rootReducer)

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [dataLoaded, setDataLoaded] = useState(false)

  if (!dataLoaded) {
    return (<AppLoading
      startAsync={fetchFonts}
      onFinish={() => setDataLoaded(true)}
      onError={err => console.log(err)}
    />)
  }



  return (
    <Provider store={store}>
      <ProductNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
