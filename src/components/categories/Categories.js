import React from 'react'
import { View, Text, TouchableOpacity } from "react-native";
import { Styles } from "./CategoriesStyle";
import { categories } from "../../consts/CategoryData";

export default function Categories() {
    const [categoryIndex, setCategoryIndex] = React.useState(0)

    return (
        <View style={Styles.categoryContainer}>
            {categories.map((items, index) => {
                return (
                    <TouchableOpacity key={index} activeOpacity={0.8} onPress={()=> setCategoryIndex(index)}>
                        <Text style={[Styles.categoryTxt, categoryIndex == index && Styles.categoryTxtSelect]}>
                            {items}
                        </Text>
                    </TouchableOpacity>
                )
            })
            }
        </View>
    )
}
