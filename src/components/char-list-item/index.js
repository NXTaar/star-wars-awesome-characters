import styles from './styles'

const { getTheme } = Material
const { View, Image, Text } = Native

const theme = getTheme()

export default CharListItem = ({avatar, name, qoute}) =>
    (
        <View style={[theme.cardStyle, styles.container]}>
            <View style={styles.avatarContainer}>
                <Image style={styles.avatar} source={ASSETS.images['obi-wan']} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.primaryText}>Obi-Wan Kenobi</Text>
                <Text style={styles.secondaryText}>"That's no moon. It's a space station"</Text>
            </View>
        </View>
    )