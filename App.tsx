import { Alert, ScrollView, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import './global.css';
import { SafeAreaView } from 'react-native-safe-area-context';

import Toolbar from 'components/Toolbar';
import { ImageBanner, ImagenBanner, Pelicula, Peliculas } from 'model/Types';

import { Banner } from 'components/Banner';
import { CargadorBAnner } from 'helpers/CargadorBAnner';
import { Buscador } from 'components/Buscador';
import { CargadorPeliculas } from 'helpers/CaragadorPeliculas';
import { VisorPeliculas } from 'components/VisorPeliculas';
import { VisorPelicula } from 'components/VisorPelicula';

export default function App() {
  const [banners, setBanners] = useState<Array<ImageBanner>>([]);

  const [peliculas, setPeliculas] = useState<Peliculas>([]);

  function accionCargarBanners() {
    CargadorBAnner()
      .then((banners) => {
        setBanners(banners);
      })
      .catch((error) => {
        console.error('Error al cargar:', error);
        Alert.alert('Error', 'No se pudieron cargar los banners');
      });
  }

  function accionCaragrPeliculas() {
    CargadorPeliculas()
      .then((peliculas) => {
        setPeliculas(peliculas);
      })
      .catch((error) => {
        console.error('Error al cargar:', error);
        Alert.alert('Error', 'No se pudieron cargar las peliculas ');
      });
  }

  function getBanner(id: string): ImageBanner {
    return banners.find((b) => b.id === id) ?? ImagenBanner;
  }

  useEffect(() => {
    accionCargarBanners();
  }, []);

  useEffect(() => {
    accionCaragrPeliculas();
  }, []);

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <Toolbar />
        <Banner source={getBanner('central').urlFoto} />
        <Buscador />
        <VisorPeliculas peliculas={peliculas}/>
       
      </ScrollView>
    </SafeAreaView>
  );
}
