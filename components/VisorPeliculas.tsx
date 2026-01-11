import { FlatList, StyleSheet, Text, useWindowDimensions, View } from 'react-native'
import React from 'react'
import { Peliculas } from 'model/Types'
import { VisorPelicula } from './VisorPelicula'

type VisorPeliculasProp={
  peliculas:Peliculas
}

export function VisorPeliculas(peliculas:VisorPeliculasProp) {
  const resolucion = useWindowDimensions()
  return (

    <View className='bg-background p-4 dark:bg-darkBackground'>
      <FlatList
      data={peliculas.peliculas}
      renderItem={({item}) => <VisorPelicula id={item.id} titulo={item.titulo} urlFoto={item.urlFoto}/>}
      keyExtractor={p => p.id.toString()}
      scrollEnabled={false}
      numColumns={resolucion.width>768?4:2}
        />
    </View>
  )
}

