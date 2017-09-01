import './src/globals'


import { Provider } from 'react-redux';
import LoginView from './src/views/login'
const { AppRegistry, Text } = Native


export default class StarWarsAwesomeCharacters extends Component {
  componentDidMount() {
    Store.dispatch({type: 'APP_LOADED'})
  }
  render() {
    return (
      <Provider store={Store}>
        <LoginView />
      </Provider>
    );
  }
}

AppRegistry.registerComponent('StarWarsAwesomeCharacters', () => StarWarsAwesomeCharacters);
