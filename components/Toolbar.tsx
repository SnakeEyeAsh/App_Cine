import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { Boton } from './Boton'
import clsx from 'clsx'

export default function Toolbar() {
  return (
    <View className={clsx("bg-[#3782A3] px-2 py-6 justify-between items-center flex-row")}>
      <View className={clsx("px-2 flex-row justify-center items-center")}>
        <MaterialIcons name="menu" size={24} color="white" />
        <MaterialIcons name="star" size={50} color="gold" />
        <Text className={clsx("color-white text-2xl font-bold tracking-[0.3em]")}>CINEPÓLIS</Text>
      </View>
      <View className={clsx("px-2 flex-row justify-center items-center")}>
        <MaterialIcons name="search" size={30} color="white" />
        <Boton texto={'Entrar'} relleno={true}/>
      </View>
    </View>
  )
}

