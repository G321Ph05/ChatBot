import { View, Text, TextInput, FlatList, TouchableOpacity, ScrollView, ActivityIndicator, Platform,
  } from "react-native";
  import React, { useState } from "react";
  import { LinearGradient } from "expo-linear-gradient";
  import { SafeAreaView } from "react-native-safe-area-context";
  import { languages, voices } from "@/constants/voices";
  import DropDownMenu from "@/Components/DropDownMenu";
  import Modal from "react-native-modal";
  import { StatusBar } from "expo-status-bar";
  
  const HomeScreen = () => {
    const [script, setScript] = useState("");
    const [selectedVoiceOver, setSelectedVoiceOver] = useState(null);
    const [loading, setLoading] = useState(false);
    const onChangeText = (script: string) => {
      setScript(script);
    };
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const [selectedAccent, setSelectedAccent] = useState(
      languages[0].accentLang[0]
    );
    // English -> UK/US/IN...
    //   pick the accent based on selected lang
    const accents = languages.find(
      (lang) => lang.lang === selectedLang.lang
    )?.accentLang;
    const SelectedLocale = `${selectedLang.langCode}-${selectedAccent.countryCode}`;
    const filteredVoices = voices.filter(
      (voice) => voice.locale === SelectedLocale
    );
    const dataVoices = filteredVoices.map((voice) => ({
      label: `${voice.name} (${voice.gender})`,
      value: voice.id,
    }));
    const selectedVoiceData = filteredVoices.filter(
      (voice) => voice.id === selectedVoiceOver
    );
  

    return (
      <LinearGradient
        colors={["#5e35b1", "#673ab7", "#ab47bc"]}
        style={{ flex: 1, height: "100%", width: "100%", paddingHorizontal: 8 }}
      >
        <SafeAreaView>
          <ScrollView>
            <View className="h-full w-full flex-1">
              {/* loading */}
  
              <Modal isVisible={loading}>
                <View className="py-9 w-full bg-white rounded-2xl px-3">
                  <ActivityIndicator size={"large"} />
                  <Text className="text-xl text-center mt-9 font-bold">
                    Generating Audio...
                  </Text>
                </View>
              </Modal>
  
              {/* Enter Script */}
              <View>
                <Text className="text-2xl text-white font-semibold">
                  Type Script
                </Text>
                <TextInput
                  value={script}
                  placeholder="Type Script"
                  multiline={true}
                  onChangeText={(e: string) => onChangeText(e)}
                  className="h-72 mt-3 p-5 shadow-lg bg-secondary-100 rounded-2xl w-full flex-wrap"
                  style={{
                    textAlignVertical: "top",
                  }}
                />
              </View>
              {/* Select Lang & its accent */}
              <View className="py-5">
                <Text className="text-2xl text-white font-semibold mb-3">
                  Select Language
                </Text>
                <FlatList
                  data={languages}
                  keyExtractor={({ lang }) => lang}
                  horizontal
                  ItemSeparatorComponent={() => <View className="w-5" />}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => setSelectedLang(item)}
                      className={` p-3 rounded-full px-7 ${
                        selectedLang.lang === item.lang
                          ? "bg-secondary-400"
                          : "bg-white"
                      } `}
                    >
                      <Text
                        className={`  ${
                          selectedLang.lang === item.lang
                            ? "text-white font-bold"
                            : "text-black"
                        }   text-lg`}
                      >
                        {" "}
                        {item.lang}{" "}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
                {/*  accents by langs */}
                <Text className="text-2xl text-white font-semibold my-3">
                  Select Accent
                </Text>
                <FlatList
                  data={accents}
                  keyExtractor={({ countryCode }) => countryCode}
                  horizontal
                  ItemSeparatorComponent={() => <View className="w-5" />}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({ item, index }) => (
                    <TouchableOpacity
                      onPress={() => setSelectedAccent(item)}
                      className={` p-3 rounded-full px-7 ${
                        selectedAccent.countryName === item.countryName
                          ? "bg-secondary-400"
                          : "bg-white"
                      } `}
                    >
                      <Text
                        className={`  ${
                          selectedAccent.countryName === item.countryName
                            ? "text-white font-bold"
                            : "text-black"
                        }   text-lg`}
                      >
                        {" "}
                        {item.countryName}{" "}
                      </Text>
                    </TouchableOpacity>
                  )}
                />
                <View className="mt-8">
                  <DropDownMenu
                    data={dataVoices}
                    //onHandleChange={(value) => setSelectedVoiceOver(value)}
                  />
                </View>  
                {/* generate speech */}
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
        <TouchableOpacity
          //onPress={handleGenerateSpeechFromText}
          disabled={script.length < 3 || !selectedVoiceOver}
          className=" absolute bottom-12 py-5  mt-3 px-3 rounded-full w-full justify-center self-center"
        >
          <LinearGradient
            colors={["#5e35b1", "#673ab7", "#ab47bc"]}
            start={{ x: 0.2, y: 1 }}
            end={{ x: 1, y: 1 }}
            style={{
              width: "100%",
              paddingVertical: 15,
              paddingHorizontal: 5,
              marginTop: "30%",
              borderRadius: 50,
            }}
          >
            <Text className="text-white capitalize text-center text-xl">
              {" "}
              generate speech
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        <StatusBar backgroundColor="#5e35b1" style="light" />
      </LinearGradient>
    );
  };
  
  export default HomeScreen;