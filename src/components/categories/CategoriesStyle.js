import { StyleSheet } from "react-native";
import { COLORS } from "../../consts/colors";

export const Styles = StyleSheet.create({
    categoryContainer : {
        flexDirection : "row",
        marginTop : 30,
        marginBottom : 20,
        justifyContent : "space-between",
    },
    categoryTxt : {
        fontSize : 14,
        color : "#6c757d",
        fontWeight : "bold"
    },
    categoryTxtSelect : {
        color : COLORS.green,
        paddingBottom : 5,
        borderBottomWidth : 2,
        borderColor : COLORS.green,
    }
})