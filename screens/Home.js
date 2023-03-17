import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, ToastAndroid, View, TouchableOpacity, SafeAreaView, Image, Dimensions } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import SafeViewAndroid from "../components/SafeViewAndroid";
import Colors from "../style/colors";
import Icons from "../style/icons";


const { width, height } = Dimensions.get("window");
const ASPECT_RATIO = width / height;
const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
const INITIAL_POSITION = {
    latitude: 40.767110,
    longitude: -73.979704,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};


export default function Home() {

    let [text, setText] = useState("moderfakir");
    let [menuState, toggleMenu] = useState(false);
    let [layersState, toggleLayers] = useState(false);
    let [statsState, toggleStats] = useState(false);

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={ss.container}><MapView style={styles.map} provider={PROVIDER_GOOGLE} initialRegion={INITIAL_POSITION} />
                {/*<View style={styles.container}>
                    
                </View>*/}
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
                    layersState ?
                        <View
                            style={ss.layers}>
                            <TouchableOpacity
                                style={ss.layerItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/layers/layer_1.png")} style={{ width: 48, height: 48 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.layerItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/layers/layer_2.png")} style={{ width: 48, height: 48 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.layerItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/layers/layer_3.png")} style={{ width: 48, height: 48 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.layerItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/layers/layer_4.png")} style={{ width: 48, height: 48 }} resizeMode='contain' />
                            </TouchableOpacity>
                        </View> : null
                }

                {
                    statsState ?
                        <View
                            style={ss.stats}>
                            <TouchableOpacity
                                style={ss.closeStatsButton}
                                onPress={() => {
                                    toggleStats(false);
                                }}>
                                <Image source={require("../assets/images/ui/cross.png")} style={{ width: 30, height: 30 }} resizeMode='contain' />
                            </TouchableOpacity>
                        </View> : null
                }
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
                                    toggleStats(statsState = !statsState);
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
            </View>
        </SafeAreaView>
    );
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
    }, closeStatsButton: {
        position: "absolute",
        right: 10,
        top: 10,
        width: 30,
        height: 30,
        backgroundColor: Colors.tertary,
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
        right: 96,
        top: 90,
        width: 48,
    }, stats: {
        position: "absolute",
        right: 10,
        bottom: 110,
        width: Dimensions.get("window").width - 40,
        height: Dimensions.get("window").height - 500,
        maxHeight: Dimensions.get("window").height - 220,
        minHeight: 300,
        backgroundColor: Colors.primary + "55",
        margin: 10,
        borderRadius: 20,
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
    }, layerItem: {
        position: "relative",
        width: 48,
        height: 48,
        marginVertical: 2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.secondary,
        backgroundColor: Colors.secondary,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        overflow: "hidden",
    }, buttonBackgroundImage: {
        width: "100%",
        height: "100%"
    }

});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "red",
    },
    map: {
        width: '100%',
        height: '100%',
    },
});