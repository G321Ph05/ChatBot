import { Text, View, ImageBackground, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from "react-native";
import React from 'react'
import { StatusBar } from "expo-status-bar"
import { LinearGradient } from 'expo-linear-gradient';
import { useRouter } from 'expo-router';

const WelcomeScreen = () => {
  const windowHeight  = useWindowDimensions().height;

  return (
    <ImageBackground
      source={require("./Blue_Abstact_BG.png")}
      className="flex-1"
    >
      <Image source={require("./chatbot_icon_image.png")} 
      style={{
          alignSelf: "center",
          justifyContent: "center",
          width: 185,
          height: 185,
          marginTop: windowHeight * 0.29,
      }}>
      </Image>
      <LinearGradient
      colors={["transparent", "rgba(0, 0, 0, 0.5)", "black"]}
      style={{flex: 1, height: "100%", width: "100%" }}
      >
        <View className="w-full mt-10"/>
        <SafeAreaView>
          <View className="px-5 absolute mt-7">
              <Text className="text-5xl text-white font-extrabold">Explore your Question with AI-powered Voice</Text>
              <Text className="text-lg font-semibold text-white/50">Speakup offers a variety of customizable, natural-sounding voices accomodated your specific needs </Text>
            <TouchableOpacity className="bg-primary-600 justify-center self-center 
                                        py-5 px-3 rounded-full w-full mt-14"
                              onPress={() => router.push("/(home)")}
                                        >
                  <Text className="text-white text-center text-lg font-semibold">Get Started</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>
      <StatusBar style="light"/>
    </ImageBackground>
  );
};

export default WelcomeScreen
