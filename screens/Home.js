import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, ToastAndroid, View, TouchableOpacity, SafeAreaView, Image, Dimensions } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Colors from "../style/colors";
import Icons from "../style/icons";

export default function Home() {

    let [text, setText] = useState("moderfakir");
    let [menuState, toggleMenu] = useState(false);
    let [layersState, toggleLayers] = useState(false);
    let [statsState, toggleStats] = useState(false);

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={ss.container}>
                <Image source={require('../assets/images/temp_map.png')} style={ss.map} />
                <TouchableOpacity
                    style={ss.menuButton}
                    onPress={() => {
                        toggleMenu(menuState = !menuState);
                        toggleLayers(false);
                    }}>
                    <Image source={require("../assets/images/ui/menu.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ss.layersButton}
                    onPress={() => {
                        toggleLayers(layersState = !layersState);
                        toggleMenu(false);
                    }}>
                    <Image source={require("../assets/images/ui/layers.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ss.currentLocationButton}
                    onPress={() => ToastAndroid.show("Go to current location.", ToastAndroid.SHORT)}>
                    <Image source={require("../assets/images/ui/currentlocation.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ss.newsButton}
                    onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                    <Image source={require("../assets/images/ui/news.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                </TouchableOpacity>
                {
                    menuState ?
                        <View
                            style={ss.menu}>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/ui/favourites.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => {
                                    toggleStats(true);
                                    toggleMenu(false);
                                }}>
                                <Image source={require("../assets/images/ui/stats.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/ui/help.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/ui/settings.png")} style={ss.buttonBackgroundImage} resizeMode='contain' />
                            </TouchableOpacity>
                        </View> : null
                }

                {
                    layersState ?
                        <View
                            style={ss.layers}>

                        </View> : null
                }

                {
                    statsState ?
                        <View
                            style={ss.stats}>

                        </View> : null
                }
            </View>
        </SafeAreaView>
    );
}

function Window() {
    return Dimensions.get("window");
}

const ss = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    }, wrapper: {
        position: "absolute",
        top: 0,
        left: 0,
        flex: 1,
        alignItems: "baseline",
        justifyContent: "center",
        backgroundColor: "#aaaaaa"
    }, map: {
        flex: 1,
    }, tempButtonText: {
        color: "#ffffff"
    }, menuButton: {
        position: "absolute",
        right: 20,
        top: 20,
        width: 60,
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    }, layersButton: {
        position: "absolute",
        right: 90,
        top: 20,
        width: 60,
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    }, currentLocationButton: {
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: 10,
    }, newsButton: {
        position: "absolute",
        left: 20,
        bottom: 20,
        width: 80,
        height: 80,
        backgroundColor: Colors.primary,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
    }, menu: {
        position: "absolute",
        right: 20,
        top: 85,
        width: 60,
        alignItems: "flex-end",
    }, layers: {
        position: "absolute",
        right: 70,
        top: 90,
        width: 100,
        height: 180,
        backgroundColor: "#00000020"
    }, stats: {
        position: "absolute",
        right: 0,
        bottom: 120,
        width: "100%",
        height: 320,
        backgroundColor: "#00000020"
    }, menuItem: {
        position: "relative",
        width: 50,
        height: 50,
        marginVertical: 2,
        borderRadius: 30,
        backgroundColor: Colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    }, buttonBackgroundImage: {
        width: "100%",
        height: "100%"
    }

});
