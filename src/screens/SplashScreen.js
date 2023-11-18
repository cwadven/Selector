import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login');
        }, 2000); // 2 seconds delay
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>NULLY</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold'
    }
});

export default SplashScreen;
