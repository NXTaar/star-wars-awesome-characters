const { Text, View, Image, ImageBackground } = Native
import styles from './styles'

import Background from 'components/background'

import { userLoginInput, signIn } from './actions'

import {
    getTheme,
    MKTextField,
    MKColor,
    MKButton,
    MKCardStyles
} from 'react-native-material-kit';

const theme = getTheme();



const LoginField = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Login')
    .withHighlightColor(COLORS.theme.primary)
    .withStyle([styles.formInputs])
    .build()


const PasswordField = MKTextField.textfieldWithFloatingLabel()
    .withPassword(true)
    .withPlaceholder('Password')
    .withHighlightColor(COLORS.theme.primary)
    .withStyle(styles.formInputs)
    // .withOnFocus(() => console.log('Focus'))
    // .withOnBlur(() => console.log('Blur'))
    // .withOnEndEditing((e) => console.log('EndEditing', e.nativeEvent.text))
    // .withOnSubmitEditing((e) => console.log('SubmitEditing', e.nativeEvent.text))
    // .withOnTextChange((e) => console.log('TextChange', e))
    // .withOnChangeText((e) => console.log('ChangeText', e))
    .build()

const ColoredRaisedButton = MKButton.coloredButton()
    .withText('SIGN IN')
    .withBackgroundColor(COLORS.theme.primary)
    .withStyle([styles.signInBtn, styles.formInputs])
    .withOnPress(() => {
        console.log("Hi, it's a colored button!");
    })
    .build();


// const mapDispatchToProps = (dispatch) => {
//     return ({
//         inputHandler: (input) => (val) => {
//             console.log(input, val)
//             dispatch(testAction)
//         }
//     })
// }
class LoginView extends Component {
    static navigationOptions = {
        header: null
    }
    static mapDispatchToProps(dispatch, getState) {
        return {
            inputHandler: (input) => (val) => dispatch(userLoginInput({ input, val })),
            btnHandler: (navigate) => () => {
                let passed = dispatch(signIn)
                if (passed) navigate('CharList')
            }
        }
    }
    static mapStateToProps(state) {
        return {
            login: state.loginView.login,
            password: state.loginView.password,
            error: state.loginView.error,
            loginOk: state.applicationData.loginOk
        }
    }
    render() {
        let { inputHandler, login, password, error, btnHandler, loginOk } = this.props
        let headerStyles = [styles.header, error ? styles.error : {}]
        let titleText = error ? "Wrong login credentials!" : "Welcome"
        const { navigate } = this.props.navigation
        return (
            <View style={[styles.view, styles.centerised]}>
                <Image style={[styles.background]} source={ASSETS.images['login-background']}></Image>
                <View style={[theme.cardStyle, styles.container]}>
                    <View style={headerStyles}>
                        <Text style={[styles.title]}>{titleText}</Text>
                    </View>
                    <View style={[styles.content]}>
                        <LoginField value={login} onChangeText={inputHandler('login')} />
                        <PasswordField value={password} onChangeText={inputHandler('password')} />
                        <ColoredRaisedButton onPress={btnHandler(navigate)} />
                    </View>
                </View>
            </View>
        );
    }
}

export default connect(LoginView.mapStateToProps, LoginView.mapDispatchToProps)(LoginView)
