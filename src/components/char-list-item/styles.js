export default StyleSheet.create({
    container: {
        height: 72,
        marginLeft: 16,
        marginRight: 16,
        marginTop: 8,
        flexDirection: 'row'
    },
    avatarContainer: {
        width: 72,
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        height: 40,
        width: 40,
    },
    textContainer: {
        marginTop: 12
    },
    primaryText: {
        fontSize: 16,
        color: COLORS.theme.primaryText
    },
    secondaryText: {
        fontSize: 14,
        color: COLORS.theme.secondaryText
    }
})