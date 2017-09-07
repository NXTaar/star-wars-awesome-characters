import ActionButton from 'react-native-action-button'
import Icon from 'react-native-vector-icons/Ionicons';

import Lightsaber from './lightsaber'

const {Text} = Native

const HEXtoRGBA = (hex, alpha = 1) => {
    let r = parseInt(hex.slice(1, 3), 16)
    let g = parseInt(hex.slice(3, 5), 16)
    let b = parseInt(hex.slice(5, 7), 16)
    let rgba = `rgba(${r},${g},${b},${alpha})`
    let rgb = `rgb(${r},${g},${b})`
    return (typeof alpha === 'number') ? rgba : rgb
}

const resolveColor = color => /rgb/.test(color) ? color : HEXtoRGBA(color)



export default ActionsPanel = ({ color, actions }) => {
    return (
        <Lightsaber buttonColor={resolveColor(color)}>
        </Lightsaber>
    )
}