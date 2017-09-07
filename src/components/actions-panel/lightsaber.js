import ActionButton from 'react-native-action-button'

const { Image } = Native
import styles from './styles'

let icon = <Image style={styles.icon_rastr} source={ASSETS.images['lightsaber']} />

export default LightSaber = ({buttonColor, lsColor, children}) => {
    return (
        <ActionButton buttonColor={buttonColor} icon={icon} >
           {children}
        </ActionButton>
    )
}