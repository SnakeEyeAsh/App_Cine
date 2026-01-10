import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import clsx from 'clsx';

type BotonProps = {
    texto:string
    relleno:boolean
    className?:string
}

export function Boton({texto,relleno,className}:BotonProps) {
  return (
    <Pressable className={clsx('px-6 py-3', relleno ? 'bg-[#ff4f2e]' : 'bg-white border-2 border-[#ff4f2e]')}
      onPress={() => console.log("hola")}>
      <Text className={clsx('color-center font-semibold', relleno ? 'color-white' : "color-[#ff4f2e]", className)}>{texto}</Text>
    </Pressable>
  )
}

