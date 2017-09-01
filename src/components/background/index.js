const { Image, Dimensions, View, ImageBackground } = Native;
import styles from './styles'


export default Background = ({ children, image }) =>
    (
        <ImageBackground
            style={styles.image}
            source={ASSETS.images[image]}>
            {children}
        </ImageBackground>
    )