import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

import BackgroundImage from './../../components/background-image'

export default class LoginView extends Component {
    render() {
        return (
            <View>
                <BackgroundImage image="login-background"/>
            </View>
        );
    }
}