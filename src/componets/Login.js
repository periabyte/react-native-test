import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Pressable,
    ScrollView,
    Image,
    TextInput,
    ActivityIndicator,
} from 'react-native';
import { login } from '../api/RestApi';
import logo from '../../assets/logo.png';

const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const { navigation } = props;

    const submitLogin = async () => {
        try {
            setLoading(true);
            const isLoggedIn = await login(email, password);

            if (!isLoggedIn) throw new Error('Invalid Credentials');
            navigation.navigate('Products');
        } catch (err) {
            setError(err.message || 'Something went wrong');
        } finally {
            setLoading(false);
        }
    };

    const renderError = () => {
        if (!error) return null;

        return (
            <View
                style={{
                    marginBottom: 20,
                    alignContent: 'center',
                }}
            >
                <Text style={{ color: 'red', textAlign: 'center' }}>
                    {error}
                </Text>
            </View>
        );
    };

    return (
        <SafeAreaView style={{ backgroundColor: '#fff' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, height: '100%' }}>
                <View
                    style={{
                        flex: 1,
                        backgroundColor: '#fff',
                        padding: 38,
                        alignContent: 'center',
                    }}
                >
                    <View
                        style={{
                            flex: 1,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginBottom: 13,
                        }}
                    >
                        <Image
                            source={logo}
                            style={{ height: 169, width: 169 }}
                        />
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <View style={{ marginBottom: 13 }}>
                            <Text style={{ fontSize: 34, fontWeight: 'bold' }}>
                                Login
                            </Text>
                        </View>
                        <View style={{ marginBottom: 13 }}>
                            <Text style={{ fontSize: 18, opacity: 0.6 }}>
                                Please Login to your account
                            </Text>
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <TextInput
                                disabled={loading}
                                onChangeText={(e) => setEmail(e)}
                                value={email}
                                placeholder="Email Address"
                                autoCapitalize={false}
                                keyboardType="email-address"
                                style={{
                                    fontSize: 14,
                                    paddingVertical: 14,
                                    borderBottomColor: '#707070',
                                    borderBottomWidth: 1,
                                }}
                                placeholderTextColor="rgba(0,0,0, 0.6)"
                            />
                        </View>

                        <View style={{ marginBottom: 20 }}>
                            <TextInput
                                disabled={loading}
                                onChangeText={(e) => setPassword(e)}
                                value={password}
                                autoCapitalize={false}
                                placeholder="Password"
                                secureTextEntry
                                style={{
                                    fontSize: 14,
                                    paddingVertical: 14,
                                    borderBottomColor: '#707070',
                                    borderBottomWidth: 1,
                                }}
                                placeholderTextColor="rgba(0,0,0, 0.6)"
                            />
                        </View>

                        {renderError()}
                    </View>

                    <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                        <Pressable
                            disabled={!email || !password || loading}
                            onPress={submitLogin}
                            style={{
                                alignItems: 'center',
                                backgroundColor: '#0087E1',
                                padding: 17,
                                borderRadius: 30,
                                justifyContent: 'flex-end',
                                opacity: !email || !password ? 0.7 : 1,
                            }}
                        >
                            {loading ? (
                                <ActivityIndicator color="#fff" />
                            ) : (
                                <Text
                                    style={{
                                        fontWeight: 'bold',
                                        textTransform: 'uppercase',
                                        color: 'white',
                                        fontSize: 16,
                                    }}
                                >
                                    Login
                                </Text>
                            )}
                        </Pressable>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default Login;
