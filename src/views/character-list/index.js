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
            dataLoaded: true/* Array.isArray(chars) && chars.length > 0 */
        }
    }
    static mapDispatchToProps = () => ({})
    static navigationOptions = {
        title: "Choose your hero!",
        headerLeft: null
    }
    componentDidMount() {
        dispatch(loadCharactersList)
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
                data={[
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "Character Long Name", image: "avatar.png" },
                    { title: "ddd", image: "dsdd" }
                ]}
                renderItem={({ item }) => <CharListItem />}
                keyExtractor={(item, index) => index}
            />
        return (
            <View style={styles.container}>
                {dataLoaded ? <CharList /> : <LoadingChars />}
            </View>

        )
    }
}

export default connect(CharacterList.mapStateToProps, CharacterList.mapDispatchToProps)(CharacterList)