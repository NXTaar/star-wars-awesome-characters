import React, { Component } from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'


export default class BackgroundImage extends Component {
    render() {
        let source = this.props.image
        return (
            <View>
                <Image source={ASSETS.images[source]}/>
            </View>
        );
    }
}