const { Text, View, Image, ScrollView } = Native


import styles, { bgColor } from './styles'
import InfoList from 'components/info-list'
import ActionsPanel from 'components/actions-panel'

const charColor = comp => {
    const color = _.get(comp, 'props.navigation.state.params.color', COLORS.theme.background)
    return bgColor(color)
}

const makeInfoList = ({gender, height, birth_year}) => {
    gender = gender.charAt(0).toUpperCase() + gender.slice(1)
    let yearPostfix = birth_year.replace(/\d*\.\d*|\s/g, "")
    let yearDigit = birth_year.replace(/[^\d*\.\d*|\s]/g, "")
    return [
        {
            text: gender,
            field: 'Gender'
        },
        {
            text: height,
            field: 'Height'
        },
        {
            text: `${yearDigit} ${yearPostfix}`,
            field: 'Year of birth'
        },
    ]
}

class CharacterDetails extends Component {
    static mapStateToProps = state => ({})
    static navigationOptions = {
        headerTintColor: "white",
        headerStyle: styles.headerStyle
    }
    render() {
        let characterInfo = this.props.navigation.state.params
        let {name, gender, height, color, cardAvatar, titleColor} = characterInfo
        let actionsConfig = {color}
        return (
            <View style={[styles.container/*, charColor(this)*/]}>
                <View style={[styles.imageContainer, charColor(this)]}>
                    <Image style={styles.avatar} source={ASSETS.images[cardAvatar]}/> 
                    <Text style={[styles.characterName]}>{name}</Text>
                </View>
                <InfoList style={{marginTop: 8}} list={makeInfoList(characterInfo)}/>
                <ActionsPanel {...actionsConfig}/>
            </View>
        )
    }
}

export default connect(CharacterDetails.mapStateToProps)(CharacterDetails)