import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import clsx from 'clsx'
import { Image } from 'expo-image'
import { cssInterop } from 'nativewind'

cssInterop(Image,{className:"style"})

type BannerProps = {
    source:string
    className?:string
}

export function Banner({source,className}:BannerProps) {
  return (
    <View className={clsx("w-full ",className)}>
      <Image
      source={source}
      contentFit='fill'
      style={{height:200}}
      />
    </View>
  )
}




