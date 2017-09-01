export default StyleSheet.create({
    container: {
        width: "80%",
    },
    background: {
        position: 'absolute'
    },
    header: {
        backgroundColor: '#ad1457',
        height: 104,
        // position: 'absolute',
        // left: -1,
        // top: -1
        // width: "100%",
        // flex: 1
    },
    title: {
        // paddingLeft: 16,
        position: 'absolute',
        bottom: 24,
        left: 16,
        // top: 120,
        // left: 26,
        // backgroundColor: 'transparent',
        // padding: 16,
        fontSize: 24,
        color: '#FFFFFF',
        // fontWeight: 'bold',
    },
    content: {
        padding: 20,
        justifyContent: 'center'
    },

    view: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // flexDirection: 'column',
        backgroundColor: 'red'
    },
    // centerised: {
    //     justifyContent: 'center',
    //     alignItems: 'center',
    // },
    signInBtn: {
        marginTop: 30,
        marginBottom: 15
    },
    formInputs: {
        width: "100%"
    }
});