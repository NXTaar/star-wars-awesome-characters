import React, { Component } from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import styles from './styles'

import Background from 'components/background'

import {
    getTheme,
    MKTextField,
    MKColor,
    MKButton
} from 'react-native-material-kit';

const theme = getTheme();



const LoginField = MKTextField.textfieldWithFloatingLabel()
    .withPlaceholder('Login')
    .withStyle([styles.formInputs])
    .build()


const PasswordField = MKTextField.textfieldWithFloatingLabel()
    .withPassword(true)
    .withPlaceholder('Password')
    .withHighlightColor(MKColor.Lime)
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
    .withStyle([styles.signInBtn, styles.formInputs])
    .withOnPress(() => {
        console.log("Hi, it's a colored button!");
    })
    .build();

export default class LoginView extends Component {
    render() {
        return (
            <View style={[styles.view, styles.centerised]}>
                <View style={[theme.cardStyle, styles.formContainer, styles.centerised]}>
                    <LoginField />
                    <PasswordField />
                    <ColoredRaisedButton />
                </View>
            </View>
        );
    }
}