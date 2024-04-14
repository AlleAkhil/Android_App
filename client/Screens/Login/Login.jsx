import { Text, View, Image, TextInput, TouchableOpacity, StyleSheet } from "react-native"
import style from "./style"
import logo from '../../assets/grp_3.png'
import { useFonts } from "expo-font"
import { useState } from "react"
import axios from 'axios'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loaded] = useFonts({
        'Mulish': require('../../assets/fonts/Mulish-VariableFont_wght.ttf')
    })
    if (!loaded) {
        return null;
    }

    // function handleSubmit() {
    //     console.log(email, password);
    //     const userData = {
    //         email: email,
    //         password,
    //     }
    //     axios
    //         .post("http://localhost:5001/loginUser", userData)
    //         .then(res => console.log(res.data));
    // }

    return (
        <View style={style.mainContainer}>
            <View style={style.logoContainer}>
                <Image style={style.logo} source={logo} />
            </View>
            <View style={style.loginContainer}>
                <View style={style.action}>
                    <TextInput
                        style={style.textInput}
                        placeholder="E-mail"
                        placeholderTextColor="#FFFDFD40"
                        onChange={e => setEmail(e.nativeEvent.text)}
                    />
                </View>
                <View style={[style.action, { marginTop: 25 }]}>
                    <TextInput
                        style={style.textInput}
                        placeholder="Password"
                        placeholderTextColor="#FFFDFD40"
                        onChange={e => setPassword(e.nativeEvent.text)} />
                </View>
                <View style={style.button}>
                    <TouchableOpacity style={style.inBut}>
                        <Text style={style.textSign}>
                            Login
                        </Text>
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: 47,
                    }}>
                    <Text style={{ color: '#36A546', fontFamily: 'Mulish' }}>
                        Forgot Password?
                    </Text>
                </View>
            </View>
        </View>
    )
}

export default Login
