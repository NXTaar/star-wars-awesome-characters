import './src/globals'


import { Provider } from 'react-redux';

import LoginView from './src/views/login'
import CharacterList from './src/views/character-list'

const { AppRegistry, Text } = Native

import { StackNavigator } from 'react-navigation';

const AppNavigator = StackNavigator({
  Login:    {screen: LoginView},
  CharList: {screen: CharacterList}
})


export default class StarWarsAwesomeCharacters extends Component {
  render() {
    return (
      <Provider store={Store}>
        <AppNavigator/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('StarWarsAwesomeCharacters', () => StarWarsAwesomeCharacters);
