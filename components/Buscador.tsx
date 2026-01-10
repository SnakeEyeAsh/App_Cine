import { Pressable, Text, TextInput, View } from 'react-native';
import React from 'react';
import clsx from 'clsx';

const style = {styleButton:"border-2 border-orange-500 p-3 justify-center items-center my-2",
              styleText:"text-[#b4a494] font-semibold mb-2 text-m",
              styleInput:"bg-white px-3 py-3 border border-gray-300"
}

export function Buscador() {
  return (
    <View className="bg-gray-200 px-4 py-2">
      <View className="flex-column  ">

        <Pressable className={clsx("bg-orange-500",style.styleButton)}>
          <Text className="text-white font-bold text-l">YA A LA VENTA</Text>
        </Pressable>

        <Pressable className={clsx("bg-white",style.styleButton)}>
          <Text className="text-orange-500 font-bold text-l">HOY</Text>
        </Pressable>

        <Pressable className={clsx("bg-white",style.styleButton)}>
          <Text className="text-orange-500 font-bold text-l">PROXIMAMENTE</Text>
        </Pressable>

      </View>
      <View className="mt-4 space-y-4">
        <View>
          <Text className={clsx(style.styleText)}>Cine</Text>
          <TextInput
            placeholder="-SELECCIONA UN CINE-"
            className={clsx(style.styleInput)}
            placeholderTextColor="#999"
          />
        </View>
        <View>
          <Text className={clsx(style.styleText)}>Fecha</Text>
          <TextInput
            placeholder="-ELEGIR FECHA-"
            className={clsx(style.styleInput)}
            placeholderTextColor="#999"
          />
        </View>
      </View>
    </View>
  );
}
