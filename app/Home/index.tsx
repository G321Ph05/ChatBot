import { View, Text, TextInput, FlatList, Touchable, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { languages } from '@/constants/voices';



const Home = () => {    
    const [script, setScript] = useState("");
    const onChangeText = (script: string) => setScript(script);
    const [selectedCountry, setSelectedCountry] = useState(languages[0].lang);
    const [selectedAccent, setSelectedAccent] = useState(languages[0].accentLang[0].countryName);

    return (
        <LinearGradient
            colors={["#5e35b1", "#67ab7", "#ab47c"]}
            style={{flex: 2, height: "100%", width: "1000%", paddingHorizontal: 8}} 
        >
            <SafeAreaView>
                <View>
                    <Text className="text-2xl text-white font-semibold">Text</Text>
                    <TextInput
                        placeholder="Type Script"
                        multiline = {true}
                        onChangeText={(e: string) => onChangeText(e)}
                        className= "h-72 mt-3 shadow-lg bg-secondary-100 rounded-2xl w-full flex-warp"
                        style= {{
                            textAlignVertical: "top",
                        }}
                    />
                </View>

                {/*Select the language*/}
                <View>
                    <Text className="text-2xl text-white font-semibold mb-3">Choose Language</Text>
                    <FlatList
                        data ={languages}
                        keyExtractor={({lang}) => lang}
                        horizontal
                        ItemSeparatorComponent={() => <View className="w-5" /> }
                        showsHorizontalScrollIndicator = {false}
                        renderItem={({item, index}) =>(
                            <TouchableOpacity
                                onPress={() => setSelectedCountry(item.lang)}
                                className={`p-3 rounded-full px-7 ${
                                    selectedCountry === item.lang ? "bg-secondary-500" : "bg-white"
                                }`}
                            >
                                <Text 
                                    className={` ${
                                        selectedCountry === item.lang ? "text-white" : "text-black"
                                    } text-lg` }
                                > 
                                    {" "} 
                                    {item.lang}{" "}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />

                    {/*Select the accent*/}
                    <Text className="text-2xl text-white font-semibold">Select Accent</Text>
                    <FlatList
                        data ={languages}
                        keyExtractor={({lang}) => lang}
                        horizontal
                        ItemSeparatorComponent={() => <View className="w-5" /> }
                        showsHorizontalScrollIndicator = {false}
                        renderItem={({item, index}) =>(
                            <TouchableOpacity
                                onPress={() => setSelectedCountry(item.lang)}
                                className={`p-3 rounded-full px-7 ${
                                    selectedCountry === item.lang ? "bg-secondary-500" : "bg-white"
                                }`}
                            >
                                <Text 
                                    className={` ${
                                        selectedCountry === item.lang ? "text-white" : "text-black"
                                    } text-lg` }
                                > 
                                    {" "} 
                                    {item.lang}{" "}
                                </Text>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </SafeAreaView>
        </LinearGradient>
    );
};

export default Home;