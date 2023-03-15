import React from 'react'
import { SafeAreaView, View, Text, TextInput, FlatList, Image, TouchableOpacity } from "react-native";
import { Styles } from "./HomeStyle";
import { COLORS } from "../../consts/colors";
import { plants } from "../../consts/plants";
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Categories from '../../components/categories/Categories';

export default function Home({ navigation }) {

    // Card ui
    const CardUi = ({ plants }) => {
        return (
            <TouchableOpacity onPress={() => navigation.navigate('Details', plants)}>
                <View style={Styles.cardDiv}>
                    <View style={Styles.favIcon}>
                        <View style={{
                            height: 30,
                            width: 30,
                            borderRadius: 15,
                            alignItems: 'center',
                            justifyContent: "center",
                            backgroundColor: plants.like
                                ? 'rgba(245,42,42,0.2)'
                                : 'rgba(0,0,0,0.2)',
                        }}>
                            <MaterialIcons name='favorite' size={18} color={plants.like ? COLORS.red : COLORS.dark} />
                        </View>
                    </View>
                    <View style={Styles.imgDiv}>
                        <Image style={Styles.img} source={plants.img} />
                    </View>
                    <Text style={Styles.cardText}>
                        {plants.name}
                    </Text>
                    <View style={Styles.desDiv}>
                        <Text style={Styles.priceTxt}>
                            ${plants.price}
                        </Text>
                        <View style={Styles.btnDiv}>
                            <Text style={Styles.btn}>
                                +
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    const Card = () => {
        return (
            <>
                <FlatList
                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        marginTop: 10,
                        paddingBottom: 50,

                    }}
                    numColumns={2}
                    data={plants}
                    renderItem={({ item }) => {
                        return (
                            <CardUi plants={item} />
                        )
                    }}
                    keyExtractor={item => item.id}
                />
            </>
        )
    }



    return (
        <SafeAreaView style={Styles.areaView}>
            <View style={Styles.header}>
                <View>
                    <Text style={Styles.welcomeTxt}>
                        Welcome to
                    </Text>
                    <Text style={Styles.plantTxt}>
                        Plant Shop
                    </Text>
                </View>
                <Entypo name="shopping-cart" size={28} color="#000000" />
            </View>

            <View style={Styles.inputDiv}>
                <View style={Styles.searchContainer}>
                    <AntDesign name='search1' color="#000000" size={25} style={{ marginLeft: 20 }} />
                    <TextInput placeholderTextColor='#000000' placeholder='Search' style={Styles.textField} />
                </View>

                <View style={Styles.sortBtn}>
                    <MaterialIcons name='sort' size={30} color={COLORS.white} />
                </View>
            </View>

            <Categories />

            <Card />
        </SafeAreaView>
    )
}