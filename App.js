import React from "react";
import { Text, View, StatusBar, SafeAreaView, ScrollView } from "react-native";
import { styles } from "./styleApp";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { planetas } from "./planetas";
import { Planeta } from "./planeta";

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar backgroundColor="#151718"/>
      <View style={styles.header}>
        <Text style={styles.headerText}>Vamos Explorar</Text>
        <MaterialCommunityIcons name="rocket-outline" size={30} color="#f0f0f0" />
      </View>
      <ScrollView contentContainerStyle={styles.scrollViewContainer}>
        {planetas.map((planeta) => (
          <Planeta key={planeta.id} planeta={planeta} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
