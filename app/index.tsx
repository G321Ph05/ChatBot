<<<<<<< HEAD
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
=======
import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const WelcomeScreen = () => {
  return (
    <ImageBackground
      source={require("@/assets/images/welcome-bg.jpg")}
      className="w-full flex-1 h-full"
    >
      <LinearGradient
        // Button Linear Gradient
        colors={["transparent", "rgba(0, 0, 0, 0.5)", "#000"]}
        // className="flex h-full w-full"
        style={{ flex: 1, height: "100%", width: "100%" }}
      >
        {/* <View className="h-2/4 w-full" /> */}
        <View className="px-5 absolute bottom-12">
          <Text className="text-5xl font-semibold text-white">
            Empower your words with our Al-powered voice
          </Text>
          <Text className="text-lg mt-2 font-semibold text-white/70">
            Speakwise offers a customizable, natural- sounding voice that can be
            tailored to your specific needs.
          </Text>
          <TouchableOpacity
          onPress={() => router.push("/(home)") }
          className="  py-5  mt-3 px-3 rounded-full w-full justify-center self-center">
            <LinearGradient
              colors={["#5e35b1", "#673ab7", "#ab47bc"]}
              start={{ x: 0.2, y: 1 }}
              end={{ x: 1, y: 1 }}
              style={{
                width: "100%",
                paddingVertical: 15,
                paddingHorizontal: 5,
                marginTop: 6,
                borderRadius: 50,
              }}
            >
             
              <Text className="text-white text-center text-xl">
                {" "}
                Get Started
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <StatusBar style="light" />
>>>>>>> 1b539f8f49c9f49b8718bcf51d5b4e36665bfe0e
    </ImageBackground>
  );
};

<<<<<<< HEAD
export default WelcomeScreen
=======
export default WelcomeScreen;
>>>>>>> 1b539f8f49c9f49b8718bcf51d5b4e36665bfe0e
