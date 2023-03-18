import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView, TextInput, TouchableOpacity } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Colors from "../style/colors";
import React, { useState } from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";

export default function Auth({ navigation }) {

    let [authType, setAuthType] = useState("login");
    const [toggleCheckBox, setToggleCheckBox] = useState(false)

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            {
                authType === "login" ?
                    <View style={ss.container}>
                        <Image source={require("../assets/images/ui/logo.png")} style={ss.logoImage} resizeMode='contain' />
                        <TextInput style={ss.textInput} placeholder="Username..." />
                        <TextInput style={ss.textInput} secureTextEntry={true} placeholder="Password..." />
                        <View style={ss.checkBoxBody}>
                            <View style={ss.checkBox}>
                                <Image source={require("../assets/images/ui/checkmark.png")} style={ss.checkBoxCheckmarkImage} resizeMode='contain' />
                            </View>
                            <Text style={ss.checkBoxText}>Remember Me</Text>
                        </View>
                        <TouchableOpacity
                            style={ss.primaryButtonInput}
                            onPress={() => {
                                navigation.navigate("Home");
                            }
                            }>
                            <Text style={ss.primaryButtonText}>Sign In</Text>
                            <Image source={require("../assets/images/ui/login.png")} style={ss.buttonIcon} resizeMode='contain' />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={ss.secondaryButtonInput}
                            onPress={() => {
                                setAuthType("register");
                            }
                            }>
                            <Text style={ss.secondaryButtonText}>Not a member?</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={ss.secondaryButtonInput}
                            onPress={() => {
                                setAuthType("loginhelp");
                            }
                            }>
                            <Text style={ss.secondaryButtonText}>Can't login?</Text>
                        </TouchableOpacity>
                    </View>
                    :
                    authType === "register" ?
                        <View style={ss.container}>
                            <Image source={require("../assets/images/ui/logo.png")} style={ss.logoImage} resizeMode='contain' />
                            <TextInput style={ss.textInput} placeholder="Username..." />
                            <TextInput style={ss.textInput} placeholder="E-Mail..." />
                            <TextInput style={ss.textInput} secureTextEntry={true} placeholder="Password..." />
                            <TouchableOpacity
                                style={ss.primaryButtonInput}
                                onPress={() => {
                                    alert(authType);
                                }
                                }>
                                <Text style={ss.primaryButtonText}>Sign Up</Text>
                                <Image source={require("../assets/images/ui/login.png")} style={ss.buttonIcon} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.secondaryButtonInput}
                                onPress={() => {
                                    setAuthType("login");
                                }
                                }>
                                <Text style={ss.secondaryButtonText}>Already a member?</Text>
                            </TouchableOpacity>
                        </View>
                        :
                        <View style={ss.container}>
                            <Image source={require("../assets/images/ui/logo.png")} style={ss.logoImage} resizeMode='contain' />
                            <TextInput style={ss.textInput} placeholder="E-Mail..." />
                            <TouchableOpacity
                                style={ss.primaryButtonInput}
                                onPress={() => {
                                    alert(authType);
                                }
                                }>
                                <Text style={ss.primaryButtonText}>Get Help</Text>
                                <Image source={require("../assets/images/ui/gethelp.png")} style={ss.buttonIcon} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.secondaryButtonInput}
                                onPress={() => {
                                    setAuthType("login");
                                }
                                }>
                                <Text style={ss.secondaryButtonText}>Go Back</Text>
                            </TouchableOpacity>
                        </View>
            }
            <Text style={ss.footerText}>from <Text style={ss.footerTextAlt}>Capstone 1010598 Team</Text></Text>
        </SafeAreaView>
    );
}

const ss = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "white",
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "center",
    }, logoImage: {
        width: 180,
        height: 100,
        resizeMode: "contain",
    }, checkBoxBody: {
        flexDirection: "row",
        width: "100%",
        height: 40,
        alignItems: "center",
        justifyContent: "flex-start",
        marginVertical: 8,
        paddingLeft: 5,
    }, checkBox: {
        width: 35,
        height: 35,
        backgroundColor: Colors.primary,
        borderRadius: 20,
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center",
    }, checkBoxText: {
        fontSize: 17,
        color: "gray",
        paddingLeft: 10,
    }, checkBoxCheckmarkImage: {
        width: "80%",
        height: "80%",
        tintColor: "white",
    }, textInput: {
        width: "100%",
        height: 50,
        backgroundColor: Colors.textInputWhite,
        borderRadius: 25,
        paddingHorizontal: 20,
        color: Colors.primary,
        fontSize: 17,
        marginVertical: 8,
        alignItems: "flex-start",
        justifyContent: "center",
    }, primaryButtonInput: {
        width: "100%",
        height: 50,
        backgroundColor: Colors.primary,
        borderRadius: 25,
        paddingHorizontal: 15,
        color: Colors.secondary,
        marginTop: 5,
        marginBottom: 15,
        alignItems: "flex-start",
        justifyContent: "center",
        overflow: "hidden",
    }, secondaryButtonInput: {
        height: 20,
        backgroundColor: "transparent",
        borderRadius: 25,
        paddingHorizontal: 15,
        marginVertical: 5,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    }, buttonIcon: {
        position: "absolute",
        width: 30,
        height: 30,
        marginLeft: 10,
        marginVertical: 5,
    }, primaryButtonText: {
        marginLeft: 40,
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    }, secondaryButtonText: {
        color: "#AAAAAA",
        textDecorationLine: "underline",
        fontSize: 15,
        fontWeight: "bold",
        color: Colors.secondary,
    }, footerText: {
        position: "absolute",
        bottom: 35,
        fontSize: 13,
        color: "gray",
        fontWeight: "light",
        alignSelf: "center",
        textAlign: "center",
    }, footerTextAlt: {
        fontSize: 15,
        fontStyle: "italic",
        fontWeight: 800,
        color: Colors.tertary,
    }
});