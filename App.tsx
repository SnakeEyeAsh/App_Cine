import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import './global.css'

import { SafeAreaView } from 'react-native-safe-area-context';
import { Boton } from 'components/Boton';

export default function App() {
  return (
    <SafeAreaView className="flex-1">
    <View className={"flex-1 justify-center items-center flex-column py-2 mx-8 mt-2"}>
      <Boton texto={'Texto'} relleno={true}/>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({})