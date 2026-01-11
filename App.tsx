import { Alert, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import './global.css';

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
  const web = useWindowDimensions()
  const [webVersion,setWebVersion] = useState(false)


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
  useEffect(()=> {
    setWebVersion(web.width>=1024)
    },[web.width]);

  return (
    <View className="flex-1">
      <ScrollView>
        <View className='lg:bg-blue-50'>
        <View className='bg-background dark:bg-darkBackground lg:max-w-[1200px] lg:mx-auto lg:px-4'>
        <Toolbar />
        <Banner source={getBanner('central').urlFoto} />
        <Buscador />
        <VisorPeliculas peliculas={peliculas}/>
        {
          webVersion &&(
              <Banner source={getBanner("superior").urlFoto} /> 
            )
        }
      </View>
      </View>

      </ScrollView>
    </View>
  );
}
