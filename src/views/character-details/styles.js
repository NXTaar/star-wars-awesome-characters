export const bgColor = (color) => ({ backgroundColor: color })

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.theme.backgroundWhite
    },
    headerStyle: {
        position: 'absolute',
        backgroundColor: 'transparent',
        zIndex: 100,
        top: 0,
        left: 0,
        right: 0
    },
    imageContainer: {
        height: 196
    },
    infoContainer: {

    },
    avatar: {
        height: null,
        width: null,
        flex: 1
    },
    characterName: {
        fontSize: 34,
        color: COLORS.theme.textIcons,
        position: 'absolute',
        bottom: 20,
        left: 16
    }
})