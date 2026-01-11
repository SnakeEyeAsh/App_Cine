import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React from 'react';
import { Pelicula } from 'model/Types';
import clsx from 'clsx';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';
import { useColorScheme } from 'nativewind';

const style={
  contenedorMini:'min-h-28 border border-gray-500 bg-white w-full flex items-center justify-center p-2',
  textoContenedor:"text-gray-900 font-semibold text-xl mb-2 md: text-2xl"
}

export function VisorPelicula(pelicula: Pelicula) {
  const resolucion = useWindowDimensions()
  const { colorScheme } = useColorScheme()

  const iconColor = colorScheme === 'dark' ? '#FF6B6B' : '#ff4f2e'

  return (
    <View className={clsx('h-auto w-1/2 p-2 md:w-1/4')}>
      <View className={clsx('w-full')}>
        <Image source={{ uri: pelicula.urlFoto }} className="aspect-[2/3] w-full" />
      </View>
      <View className={clsx(style.contenedorMini)}>
        <Text className={clsx(style.textoContenedor)}>{pelicula.titulo}</Text>
        <View className="flex-row justify-between w-full px-1 md:h-36">
          <MaterialIcons name="visibility" size={resolucion.width>768?32:24} color={iconColor} />
          <MaterialIcons name="favorite" size={resolucion.width>768?32:24} color={iconColor} />
        </View>
      </View>
    </View>
  );
}
