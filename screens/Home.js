import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, ToastAndroid, View, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView } from "react-native";
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

const ANOTHER_POS = {
    latitude: 30.767110,
    longitude: -33.979704,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
};

function onChangeRegion(region) {
    alert(region.toString());
}

export default function Home({ navigation }) {

    let [menuState, toggleMenu] = useState(false);
    let [layersState, toggleLayers] = useState(false);
    let [statsState, toggleStats] = useState(false);
    let [settingsState, toggleSettings] = useState(false);
    let [region, setRegion] = useState(INITIAL_POSITION);

    function resetHome() {
        toggleMenu(false);
        toggleLayers(false);
        toggleStats(false);
        toggleSettings(false);
    }

    return (
        <SafeAreaView style={SafeViewAndroid.AndroidSafeArea}>
            <View style={ss.container}>
                <MapView
                    style={styles.map}
                    provider={PROVIDER_GOOGLE}
                    initialRegion={INITIAL_POSITION}
                    showsUserLocation={true}
                    showsMyLocationButton={true} />
                <TouchableOpacity
                    style={ss.menuButton}
                    onPress={() => {
                        toggleMenu(menuState = !menuState);
                        toggleLayers(false);
                    }}>
                    <Image source={require("../assets/images/ui/menu.png")} style={ss.primaryImage} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ss.layersButton}
                    onPress={() => {
                        toggleSettings(false);
                        toggleMenu(false);
                        toggleLayers(true);
                    }}>
                    <Image source={require("../assets/images/ui/layers.png")} style={ss.primaryImage} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ss.currentLocationButton}
                    onPress={() => {
                        setRegion(ANOTHER_POS);
                    }
                    }>
                    <Image source={require("../assets/images/ui/currentlocation.png")} style={ss.primaryImage} resizeMode='contain' />
                </TouchableOpacity>
                <TouchableOpacity
                    style={ss.newsButton}
                    onPress={() => {
                        navigation.navigate("News");
                    }}>
                    <Image source={require("../assets/images/ui/news.png")} style={ss.primaryImage} resizeMode='contain' />
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
                            style={extraWindow.window}>
                            <TouchableOpacity
                                style={extraWindow.closeButton}
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
                                <Image source={require("../assets/images/ui/favourites.png")} style={ss.secondaryImage} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => {
                                    toggleStats(statsState = !statsState);
                                    toggleMenu(false);
                                }}>
                                <Image source={require("../assets/images/ui/stats.png")} style={ss.secondaryImage} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => ToastAndroid.show("Go to news page.", ToastAndroid.SHORT)}>
                                <Image source={require("../assets/images/ui/help.png")} style={ss.secondaryImage} resizeMode='contain' />
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={ss.menuItem}
                                onPress={() => {
                                    toggleLayers(false);
                                    toggleMenu(false);
                                    toggleSettings(true);
                                }}>
                                <Image source={require("../assets/images/ui/settings.png")} style={ss.secondaryImage} resizeMode='contain' />
                            </TouchableOpacity>
                        </View> : null
                }
                {
                    settingsState ?
                        <View
                            style={extraWindow.window}>
                            <TouchableOpacity
                                style={extraWindow.closeButton}
                                onPress={() => {
                                    toggleSettings(false);
                                }}>
                                <Image source={require("../assets/images/ui/cross.png")} style={{ width: 30, height: 30 }} resizeMode='contain' />
                            </TouchableOpacity>
                            <ScrollView style={extraWindow.body}>
                                <TouchableOpacity
                                    style={extraWindow.primaryButton}
                                    onPress={() => {
                                        resetHome();
                                        navigation.navigate("Auth");
                                    }}>
                                    <Image source={require("../assets/images/ui/logout.png")} style={ss.buttonIcon} resizeMode='contain' />
                                    <Text style={extraWindow.primaryButtonText}>Sign Out</Text>
                                </TouchableOpacity>
                            </ScrollView>
                        </View> : null
                }
            </View>
        </SafeAreaView >
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
        backgroundColor: Colors.white,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    }, layersButton: {
        position: "absolute",
        right: 90,
        top: 20,
        width: 60,
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    }, currentLocationButton: {
        position: "absolute",
        right: 20,
        bottom: 20,
        width: 60,
        height: 60,
        backgroundColor: Colors.white,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    }, newsButton: {
        position: "absolute",
        left: 20,
        bottom: 20,
        width: 80,
        height: 80,
        backgroundColor: Colors.white,
        borderRadius: 40,
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
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
    }, menuItem: {
        position: "relative",
        width: 50,
        height: 50,
        marginVertical: 2,
        borderRadius: 30,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 5,
    }, layerItem: {
        position: "relative",
        width: 48,
        height: 48,
        marginVertical: 2,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: Colors.white,
        backgroundColor: Colors.white,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        overflow: "hidden",
    }, primaryImage: {
        width: "100%",
        height: "100%",
        tintColor: Colors.primaryTint,
    }, secondaryImage: {
        width: "100%",
        height: "100%",
        tintColor: Colors.secondaryTint,
    }, buttonIcon: {
        position: "absolute",
        width: 30,
        height: 30,
        marginLeft: 10,
    }

});

const extraWindow = StyleSheet.create({
    window: {
        position: "absolute",
        left: 15,
        bottom: 120,
        width: Dimensions.get("window").width - 30,
        height: Dimensions.get("window").height - 500,
        maxHeight: Dimensions.get("window").height - 220,
        minHeight: 300,
        backgroundColor: Colors.white + "CC",
        borderRadius: 20,
        overflow: "hidden",
    }, body: {
        position: "relative",
        left: 0,
        top: 50,
        alignSelf: "stretch",
        height: Dimensions.get("window").height - 538,
    }, closeButton: {
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
    }, primaryButton: {
        marginHorizontal: 15,
        borderRadius: 25,
        height: 50,
        alignSelf: "stretch",
        backgroundColor: Colors.tertary,
        justifyContent: "center",
        alignItems: "flex-start",
        paddingLeft: 55,
    }, primaryButtonText: {
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
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