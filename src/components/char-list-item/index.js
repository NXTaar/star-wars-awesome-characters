import styles from './styles'

const { getTheme } = Material
const { View, Image, Text, TouchableNativeFeedback } = Native

const theme = getTheme()

export default CharListItem = ({ listAvatar, name, qoute, onTap }) =>{
    return (
        <TouchableNativeFeedback onPress={onTap}>
            <View style={[theme.cardStyle, styles.container]}>
                <View style={styles.avatarContainer}>
                    <Image style={styles.avatar} source={ASSETS.images[listAvatar]} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.primaryText}>{name}</Text>
                    <Text style={styles.secondaryText}>{qoute}</Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}