import React, {Component} from 'react';
import { createAppContainer, createSwitchNavigator,} from 'react-navigation';

import LoginScreen from './components/LoginScreen'
//import FeedBackScreen from '.FeedBackScreen'


export default class App extends React.Component {
  render(){
  return (
    <LoginScreen/>
  );
}
}


//const switchNavigator = createSwitchNavigator({
  //LoginScreen:{components: LoginScreen},
  //FeedBackScreen:{components:FeedBackScreen}
//})

//const AppContainer =  createAppContainer(switchNavigator);
