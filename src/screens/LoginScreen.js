import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Text} from 'react-native';
import Toast from 'react-native-toast-message';
import Logo from '../components/Logo';
import {TouchableOpacity} from 'react-native-web';


const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const validateEmail = (email) => {
        const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        return regex.test(email);
    };

    const validateFields = () => {
        const newErrors = { email: [], password: [] };

        if (!email) {
            newErrors.email.push('이메일은 필수입니다.');
        }
        if (!validateEmail(email)) {
            newErrors.email.push('이메일 형태를 확인해주세요.');
        }

        if (!password) {
            newErrors.password.push('비밀번호는 필수입니다.');
        }

        return newErrors;
    };

    const handleLogin = () => {
        const errors = validateFields();
        setEmailError(!!errors.email.length);
        setPasswordError(!!errors.password.length);

        if (errors.email || errors.password) {
            Toast.show({
                type: 'error',
                text1: '오류',
                text2: `${errors.email.join('\n')}\n${errors.password.join('\n')}`.trim()
            });
        }
    };

    const toastConfig = {
        error: ({text1, text2, ...rest}) => (
            <View style={{
                padding: 10,
                marginHorizontal: 20,
                borderRadius: 5,
                backgroundColor: '#ffffff',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{color: '#000000', fontWeight: 'bold'}}>{text1}</Text>
                <Text style={{color: '#000000'}}>{text2}</Text>
            </View>
        )
    };

    return (
        <View style={styles.container}>
            <Logo/>
            <TextInput
                style={[styles.input, emailError && styles.inputError]}
                placeholder="이메일"
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={[styles.input, passwordError && styles.inputError]}
                placeholder="비밀번호"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
            <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20
    },
    input: {
        width: '100%',
        marginVertical: 10,
        padding: 15,
        borderWidth: 1,
        borderColor: '#ddd',
        backgroundColor: 'white',
        borderRadius: 10,
        color: 'black'
    },
    inputError: {
        borderColor: 'red',
    },
    button: {
        width: '100%',
        backgroundColor: '#ffbc5b',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default LoginScreen;
