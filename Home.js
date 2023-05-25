import { getCities } from './redux/actions';
import { useSelector, useDispatch } from 'react-redux';
import { View, FlatList, StyleSheet, Text  } from 'react-native'
import React,  {useEffect} from 'react';;
import ScaledSheet from "react-native-size-matters"

const Home = () => {

    useEffect(() => {
       
        dispatch(getCities());
    }, []);

    const {  cities } = useSelector(state => state.userReducer);
    const dispatch = useDispatch();

  return (
    <View>
     <FlatList
                data={cities}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text style={styles.title}>{item.country}</Text>
                        <Text style={styles.subtitle}>{item.city}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
    </View>
  )
}

export default Home   

const styles= StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        margin: 10,
    },
   
    item: {
        backgroundColor: '#D25380',
        borderWidth: 1,
        borderColor: 'lightgray',
        borderRadius: 20,
        margin: 22,
        width: 300,
        height:280,
        justifyContent: 'center',
        alignSelf: 'center',
        elevation:7,
    },
    title: {
        fontSize: 30,
        margin: 20,
        textAlign:'center',
        fontWeight:"bold",
         color:"white"
    },
    subtitle: {
        fontSize: 20,
        margin: 10,
        color: 'black',
        textAlign:"center"
    }
})


// const styles = ScaledSheet.create({
//     body: {
//         flex: 1,
//         alignItems: 'center',
//     },
//     text: {
//         fontSize: 40,
//         margin: 10,
//     },
   
//     item: {
//         backgroundColor: '#D25380',
//         borderWidth: 1,
//         borderColor: 'lightgray',
//         borderRadius: 5,
//         margin: 40,
//         width: "350@s",
//         height:"200@vs",
//         justifyContent: 'center',
//         alignSelf: 'center',
//     },
//     title: {
//         fontSize: 30,
//         margin: 20,
//         textAlign:'center',
//         fontWeight:"bold",
//          color:"white"
//     },
//     subtitle: {
//         fontSize: 20,
//         margin: 10,
//         color: 'black',
//         textAlign:"center"
//     }
// })