import './src/globals'



import LoginView from './src/views/login'
const { AppRegistry, Text } = Native


export default class StarWarsAwesomeCharacters extends Component {
  render() {
    return (
     <LoginView/>
    );
  }
}

AppRegistry.registerComponent('StarWarsAwesomeCharacters', () => StarWarsAwesomeCharacters);
