import styles from './styles'

import { loadCharactersList } from './actions'

const { Text, View, FlatList } = Native

const { MKSpinner, mdl, getTheme } = Material

import CharListItem from 'components/char-list-item'

const Spinner = MKSpinner.spinner()
    .withStyle(STYLES.spinner)
    .withStrokeColor(COLORS.theme.textIcons)
    .build()

const List = props => {

}
class CharacterList extends Component {
    static mapStateToProps = state => {
        let chars = state.applicationData.characters
        return {
            dataLoaded:  Array.isArray(chars) && chars.length > 0,
            characters: chars
        }
    }
    static navigationOptions = {
        title: "Choose your hero!",
        headerLeft: null,
        headerMode: 'screen'
    }
    componentDidMount() {
        dispatch(loadCharactersList).then(p => {
            console.log('ddddddd');
        })
    }
    chooseCharacter = (char) => () => {
        this.props.navigation.navigate('CharDetails', char)
    }
    //hide keyboard
    render() {
        let { dataLoaded } = this.props
        const LoadingChars = () =>
            <View style={styles.spinnerContainer}>
                <Spinner />
            </View>
        const CharList = () =>
            <FlatList
                data={this.props.characters.map(c => {
                    c.onTap = this.chooseCharacter(c)
                    return c
                })}
                renderItem={ ({ item }) => <CharListItem {...item} /> }
                keyExtractor={(item, index) => index}
            />
        return (
            <View style={styles.container}>
                {dataLoaded ? <CharList /> : <LoadingChars />}
            </View>

        )
    }
}

export default connect(CharacterList.mapStateToProps)(CharacterList)