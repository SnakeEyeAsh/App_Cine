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
    <Pressable className={clsx('px-6 py-3', relleno ? 'bg-primary dark:bg-darkPrimary' : 'bg-white border-2 border-primary dark:border-darkPrimary')}
      onPress={() => console.log("hola")}>
      <Text className={clsx('text-center font-semibold', relleno ? 'color-white' : "color-primary dark:color-darkPrimary", className)}>{texto}</Text>
    </Pressable>
  )
}

