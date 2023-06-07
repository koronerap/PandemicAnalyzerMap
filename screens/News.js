import { View, Text, SafeAreaView, StyleSheet, Image, Dimensions, ScrollView } from "react-native";
import SafeViewAndroid from "../components/SafeViewAndroid";
import Colors from "../style/colors";

export default function News({ navigation }) {
    return (
        <View style={ss.container}>
            <ScrollView style={ss.scrollContainer} contentContainerStyle={{
                alignItems: "center",
                justifyContent: "flex-start",
            }}>
                <View style={ss.item}>
                    <View style={ss.headline}>
                        <Text style={ss.headlineText}>Did Covid-19 leak from the lab? Response from USA</Text>
                        <Text style={ss.headlineDate}>26.02.2023 - 20:11</Text>
                    </View>
                    <View style={ss.body}>
                        <Image style={ss.image} source={require("../assets/images/content/temp1.webp")} />
                        <Text style={ss.bodyText}>Questions about the source of the new type of corona virus (Covid-19) have remained unclear since the beginning of the pandemic. US National Security Advisor Jake Sullivan answered the question of whether the virus that caused the Covid-19 epidemic spread from the laboratory.</Text>
                    </View>
                </View>
                <View style={ss.item}>
                    <View style={ss.headline}>
                        <Text style={ss.headlineText}>Is Covid-19 still dangerous? Warning on the 3rd anniversary of the pandemic</Text>
                        <Text style={ss.headlineDate}>11.03.2023 - 13:00</Text>
                    </View>
                    <View style={ss.body}>
                        <Image style={ss.image} source={require("../assets/images/content/temp2.webp")} />
                        <Text style={ss.bodyText}>Covid-19, which was first seen in Wuhan, China on December 31, 2019 and officially declared a pandemic on March 11, 2020, forced countries to take precautions and create the necessary conditions to live with it for a long time. Experts emphasized that the decrease in Covid-19 cases and the relaxation in measures did not reduce the severity of the disease. So, does the Covid-19 threat continue?</Text>
                    </View>
                </View>
                <View style={ss.item}>
                    <View style={ss.headline}>
                        <Text style={ss.headlineText}>Netherlands repealed all Covid-19 measures</Text>
                        <Text style={ss.headlineDate}>11.03.2023 - 05:57</Text>
                    </View>
                    <View style={ss.body}>
                        <Image style={ss.image} source={require("../assets/images/content/temp3.webp")} />
                        <Text style={ss.bodyText}>In the Netherlands, the government announced that all measures, including testing and quarantine, were lifted as part of the fight against the Covid-19 epidemic.</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const ss = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingBottom: 10,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%",
    }, scrollContainer: {
        flex: 1,
        width: "100%",
    }, item: {
        position: "relative",
        width: Dimensions.get("window").width - 30,
        height: "auto",
        minHeight: 50,
        backgroundColor: "white",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
    }, headline: {
        position: "relative",
        height: 60,
        justifyContent: "center",
    }, body: {
        width: "100%",
    }, image: {
        width: "100%",
        resizeMode: "cover",
        borderRadius: 10,
        height: 180,
        backgroundColor: "black",
    }, headlineText: {
        position: "absolute",
        width: Dimensions.get("window").width - 140,
        fontWeight: "bold",
        fontSize: 14,
        color: Colors.tertary,
    }, headlineDate: {
        position: "absolute",
        width: 100,
        textAlign: "right",
        right: 0,
        fontSize: 10,
    }, bodyText: {
        marginVertical: 15,
        width: "90%",
        color: "black",
    }
});