import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Pelicula } from 'model/Types';
import clsx from 'clsx';
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'expo-image';

const style={
  contenedorMini:'min-h-28 border border-gray-500 bg-white w-full flex items-center justify-center p-2',
  textoContenedor:"text-gray-900 font-semibold text-xl mb-2"
}

export function VisorPelicula(pelicula: Pelicula) { 
  return (
    <View className={clsx('h-auto w-1/2 p-2')}>
      <View className={clsx('w-full')}>
        <Image source={{ uri: pelicula.urlFoto }} className="aspect-[2/3] w-full" />
      </View>
      <View className={clsx(style.contenedorMini)}>
        <Text className={clsx(style.textoContenedor)}>{pelicula.titulo}</Text>
        <View className="flex-row justify-between w-full px-1">
          <MaterialIcons name="visibility" style={{ fontSize:24, color: '#ff4f2e' }} />
          <MaterialIcons name="favorite" style={{ fontSize: 24, color: '#ff4f2e' }} />
        </View>
      </View>
    </View>
  );
}
