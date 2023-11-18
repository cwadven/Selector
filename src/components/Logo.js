import React from 'react';
import {Image, StyleSheet} from 'react-native';

const Logo = () => {
    return <Image source={require('../../assets/logo.png')} style={styles.logo}/>;
};

const styles = StyleSheet.create({
    logo: {
        width: 200,
        height: 200,
        marginBottom: 20
    }
});

export default Logo;
