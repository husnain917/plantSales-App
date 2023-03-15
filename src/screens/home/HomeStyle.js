import { StyleSheet } from "react-native";
import { COLORS } from "../../consts/colors";

export const Styles = StyleSheet.create({
    areaView : {
        flex : 1,
        paddingHorizontal : 20,
        backgroundColor : COLORS.white,
    },
    header : {
        marginTop : 20,
        flexDirection : "row",
        justifyContent : "space-between",
    },
    welcomeTxt : {
        fontSize : 25,
        fontWeight : "bold",
        color : "black",
    },
    plantTxt : {
        fontSize : 35,
        fontWeight : "bold",
        color : COLORS.green,
    },
    inputDiv : {
        marginTop : 30,
        flexDirection : "row",
    },
    searchContainer : {
        height : 50,
        backgroundColor : COLORS.light,
        borderRadius : 10,
        flex : 1,
        flexDirection : "row",
        alignItems : "center",
    },
    textField : {
        width: 275,
        color: COLORS.dark,
        fontSize : 18,
        fontWeight : "bold",
        flex : 1,
    },
    sortBtn : {
        marginLeft : 10,
        height : 50,
        width : 50,
        backgroundColor : COLORS.green,
        justifyContent : "center",
        alignItems : "center",
        borderRadius : 10,
    },


    // Card Style
    cardDiv : {
        height : 225,
        width : 150,
        backgroundColor : COLORS.light,
        marginHorizontal : 2,
        borderRadius : 10,
        marginBottom : 20,
        padding : 15,
    },
    favIcon : {
        alignItems : "flex-end",
    },
    imgDiv : {
        height: 100, 
        alignItems: "center",
    },
    img : {
        flex: 1, 
        resizeMode: "contain",
    },
    cardText : {
        fontWeight : "bold",
        fontSize : 15,
        marginTop : 10,
        color : COLORS.dark,
    },
    desDiv : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginTop : 5,
    },
    priceTxt : {
        color : COLORS.dark,
        fontSize : 17,
        fontWeight : "bold",
    },
    btnDiv : {
        height : 25,
        width : 25,
        backgroundColor : COLORS.green,
        borderRadius : 5,
        justifyContent : "center",
        alignItems : "center",
    },
    btn : {
        fontSize : 18,
        color : COLORS.white,
        fontWeight : "bold",
    }
})