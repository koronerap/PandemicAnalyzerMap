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
                        <Text style={ss.headlineText}>Covid-19 laboratuvardan mı sızdı? ABD'den yanıt</Text>
                        <Text style={ss.headlineDate}>26.02.2023 - 20:11</Text>
                    </View>
                    <View style={ss.body}>
                        <Image style={ss.image} source={require("../assets/images/content/temp1.webp")} />
                        <Text style={ss.bodyText}>Yeni tip corona virüsün (Covid-19) kaynağına ilişkin sorular pandeminin başından bu yana belirsizliği koruyor. ABD Ulusal Güvenlik Danışmanı Jake Sullivan, Cvid-19 salgınına neden olan virüsün laboratuvardan yayılıp yayılmadığı sorusuna yanıt verdi.</Text>
                    </View>
                </View>
                <View style={ss.item}>
                    <View style={ss.headline}>
                        <Text style={ss.headlineText}>Covid-19 hala tehlikeli mi? Pandeminin 3. yıl dönümünde uyarı</Text>
                        <Text style={ss.headlineDate}>11.03.2023 - 13:00</Text>
                    </View>
                    <View style={ss.body}>
                        <Image style={ss.image} source={require("../assets/images/content/temp2.webp")} />
                        <Text style={ss.bodyText}>İlk kez Çin'in Wuhan kentinde 31 Aralık 2019'da görülen ve 11 Mart 2020'de resmen pandemi ilan edilen Covid-19, uzun bir süre ülkeleri tedbir almaya ve bununla yaşamak için gerekli şartlar oluşturmaya zorladı. Uzmanlar, Covid-19 vakalarında düşüş yaşanmasına ve önlemlerdeki gevşemelerin hastalığın ciddiyetini azaltmadığını vurguladı. Peki Covid-19 tehlikesi devam ediyor mu?</Text>
                    </View>
                </View>
                <View style={ss.item}>
                    <View style={ss.headline}>
                        <Text style={ss.headlineText}>Hollanda tüm Covid-19 tedbirlerini yürürlükten kaldırdı</Text>
                        <Text style={ss.headlineDate}>11.03.2023 - 05:57</Text>
                    </View>
                    <View style={ss.body}>
                        <Image style={ss.image} source={require("../assets/images/content/temp3.webp")} />
                        <Text style={ss.bodyText}>Hollanda'da hükümet, Covid-19 salgınıyla mücadele kapsamında test yapma ve karantina dahil tüm tedbirlerin kaldırıldığını açıkladı.</Text>
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