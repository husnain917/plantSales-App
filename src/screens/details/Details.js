import React, { useState } from 'react'
import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import { Styles } from "./DetailStyle";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function Details({ navigation, route }) {
  const plant = route.params;

  const [count, setCount] = useState(1);

  // Increment
  const increment = () => {
    setCount(count + 1);
  }

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  }
  return (
    <SafeAreaView style={Styles.DetailDiv}>
      <View style={Styles.headerDiv}>
        <Ionicons name='arrow-back' color='#000000' size={28} onPress={() => navigation.goBack()} />
        <AntDesign name='shoppingcart' color='#000000' size={28} />
      </View>
      <View style={Styles.imgDiv}>
        <Image source={plant.img} style={Styles.img} />
      </View>

      <View style={Styles.detailContainer}>
        <View style={Styles.istHeading}>
          <View style={Styles.line} />
          <Text style={Styles.heading}>
            Best Choice
          </Text>
        </View>

        <View style={Styles.mainHeadingDiv}>
          <Text style={Styles.mainHeading}>
            {plant.name}
          </Text>
          <View style={Styles.priceTagStyle}>
            <Text style={Styles.priceTxt}>
              ${plant.price}
            </Text>
          </View>
        </View>

        <View style={Styles.aboutDiv}>
          <Text style={Styles.aboutHeading}>
            About
          </Text>
          <Text style={Styles.aboutPara}>
            {plant.about}
          </Text>

          <View style={Styles.btnMainDiv}>
            <View style={Styles.increBtnMainDiv}>
              <TouchableOpacity onPress={decrement}>
                <View style={Styles.increDiv}>
                  <Text style={Styles.borderBtnTxt}>
                    -
                  </Text>
                </View>
              </TouchableOpacity>

              <Text style={Styles.icreTxt}>
                {count}
              </Text>

              <TouchableOpacity onPress={increment}>
                <View style={Styles.increDiv}>
                  <Text style={Styles.borderBtnTxt}>
                    +
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={Styles.buyBtn}>
              <Text style={Styles.buyTxt}>
                Buy
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
