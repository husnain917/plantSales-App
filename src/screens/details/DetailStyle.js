import { StyleSheet } from "react-native";
import { COLORS } from "../../consts/colors";

export const Styles = StyleSheet.create({
    DetailDiv : {
        flex : 1,
        backgroundColor : COLORS.white,
    },
    headerDiv : {
        paddingHorizontal : 20,
        marginTop : 20,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    imgDiv : {
        flex : 0.45,
        marginTop : 20,
        justifyContent : "center",
        alignItems : "center"
    },
    img : {
        resizeMode : "contain",
        flex : 1,
    },
    detailContainer : {
        flex : 0.55,
        backgroundColor : COLORS.light,
        marginHorizontal : 7,
        marginBottom : 7,
        borderRadius : 20,
        marginTop : 30,
        paddingTop : 30,
        paddingBottom : 20,
    },
    istHeading : {
        marginLeft : 20,
        flexDirection : "row",
        alignItems : "flex-end"
    },
    line : {
        height : 2,
        width : 25,
        backgroundColor : COLORS.dark,
        marginBottom : 5,
        marginRight : 3,
    },
    heading : {
        fontSize : 18,
        fontWeight : "bold",
        color : COLORS.dark,
    },
    mainHeadingDiv : {
        marginLeft : 20,
        marginTop : 20,
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems : "center",
    },
    mainHeading : {
        fontSize : 22,
        fontWeight : "bold",
        color : COLORS.dark,
    },
    priceTagStyle : {
        backgroundColor : COLORS.green,
        width : 80,
        height : 40,
        borderTopLeftRadius : 25,
        borderBottomLeftRadius : 25,
        justifyContent : "center",
    },
    priceTxt : {
        marginLeft : 15,
        fontWeight : "bold",
        fontSize : 16
    },
    aboutDiv : {
        paddingHorizontal : 20,
        marginTop : 10,
    },
    aboutHeading : {
        fontSize : 20,
        fontWeight : "bold",
        color: COLORS.dark,
    },
    aboutPara : {
        color : '#6c757d',
        textAlign : "justify",
        fontSize : 16,
        lineHeight : 22,
        marginTop : 20
    },
    btnMainDiv : {
        marginTop : 8,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    increBtnMainDiv : {
        flexDirection : "row",
        alignItems : "center",
    },
    increDiv : {
        borderColor : "#6c757d",
        borderWidth : 1,
        borderRadius : 5,
        height : 40,
        width : 60,
        justifyContent : "center",
        alignItems : "center"
    },
    borderBtnTxt : {
        fontSize : 24,
        color : COLORS.dark,
    },
    icreTxt : {
        fontSize : 20,
        marginHorizontal : 12,
        fontWeight : "bold",
        color : COLORS.dark,
    },
    buyBtn : {
        width : 100,
        height : 45,
        backgroundColor : COLORS.green,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 30,
    },
    buyTxt : {
        fontSize : 18,
        fontWeight : "bold",
    }
})