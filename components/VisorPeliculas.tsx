import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Peliculas } from 'model/Types'
import { VisorPelicula } from './VisorPelicula'

type VisorPeliculasProp={
  peliculas:Peliculas
}

export function VisorPeliculas(peliculas:VisorPeliculasProp) {
  return (

    <View className='bg-slate-100 p-4'>
      <FlatList
      data={peliculas.peliculas}
      renderItem={({item}) => <VisorPelicula id={item.id} titulo={item.titulo} urlFoto={item.urlFoto}/>}
      keyExtractor={p => p.id.toString()}
      scrollEnabled={false}
      numColumns={2}
        />
    </View>
  )
}

