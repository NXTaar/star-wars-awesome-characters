const { Text, View } = Native

class CharacterList extends Component {
    static mapStateToProps = () => ({})
    static mapDispatchToProps = () => ({})
    static navigationOptions = {
        title: "Choose your hero!",
        headerLeft: null,
        headerStyle: {}
    }
    //hide keyboard
    render() {
        return (
            <View style={{backgroundColor: COLORS.theme.darkPrimary, flex: 1}}>
                <Text>I'm next view</Text>
            </View>

        )
    }
}

export default connect(CharacterList.mapStateToProps, CharacterList.mapDispatchToProps)(CharacterList)