import { View, StyleSheet, ImageBackground, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubmitBtn from '../../components/SubmitBtn'
import { Colors } from '../../theme/Colors'

const background = require('../../assets/Background.png')

const StartingScreen = ({ navigation }) => {

    // ✅ FIX: state define karo
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {

        const loadImages = async () => {

            await Image.prefetch(
                Image.resolveAssetSource(background).uri
            )

            setLoaded(true)
        }

        loadImages()

    }, [])

    // ✅ jab tak image load nahi hoti
    if (!loaded) {
        return null
    }

    return (
        <ImageBackground
            source={background}
            style={styles.container}
            resizeMode="cover"
            imageStyle={{ transform: [{ scale: 1.3 }] }}
        >

            <View style={styles.card}>

                <View style={styles.circleView}>
                    <Image
                        source={require('../../assets/bootsplash.png')}
                        style={styles.circleImage}
                    />
                </View>

                <Text style={styles.heading}>
                    NowYours
                </Text>

                <Text style={styles.subHeading}>
                    Discover great books.{"\n"}
                    Pass it on to someone else.
                </Text>

                <SubmitBtn
                    text={"Log in"}
                    style={{ marginTop: 30, width: '80%' }}
                    backgroundColor="#112353"
                    textColor="white"
                    onPress={() => navigation.navigate("Login")}
                />

                <SubmitBtn
                    text={"Register"}
                    style={{ marginTop: 20, width: '80%' }}
                    backgroundColor={Colors.secondary}
                    textColor="white"
                    onPress={() => navigation.navigate("Register")}
                />

            </View>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    card: {
        width: 260,
        height: 350,
        borderRadius: 40,
        backgroundColor: '#FFFFFF',
        elevation: 6,
        alignItems: 'center',
        paddingTop: 60,
        borderWidth: 1
    },

    heading: {
        fontSize: 28,
        textAlign: 'center',
        color: '#112353',
        fontWeight: '700'
    },

    subHeading: {
        fontSize: 17,
        color: '#777',
        fontWeight: '400',
        textAlign: 'center',
        marginTop: 5,
        paddingHorizontal: 20
    },

    circleView: {
        backgroundColor: '#FFFFFF',
        width: 100,
        height: 100,
        borderRadius: 50,
        position: 'absolute',
        top: -50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#112353',
    },

    circleImage: {
        width: 90,
        height: 90,
        resizeMode: 'contain'
    }

})

export default StartingScreen