
import styles from './styles'
const { FlatList, View, Text } = Native

const ListItem = ({ field, text }) =>
    (
        <View style={styles.listItem}>
            <Text style={[styles.primaryText]}>{text}</Text>
             <Text style={[styles.secondaryText]}>{field}</Text> 
        </View>
    )

export default InfoList = (props) => {
    const renderItem = ({ item }) => <ListItem {...item} />
    const keyExtractor = (item, index) => index
    const configuration = {
        data: props.list,
        renderItem,
        keyExtractor
    }
    return <FlatList style={[props.style, styles.container]} {...configuration} />
    
}
