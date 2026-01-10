import request, { gql } from "graphql-request";
import { Peliculas } from "model/Types";
import { Platform } from "react-native";

const ip = Platform.OS === "android" ? "10.0.2.2" : "localhost";
const URL = `http://${ip}:3000/graphql`

export async function CargadorPeliculas(): Promise<Peliculas> {

    console.log("entra en la funcion")

    const query = gql`
    query MyQuery {
        allPeliculas {
                id
                titulo
                urlFoto
        }
    }   
    `
    const respuesta = await request(URL, query);
    console.log("llego a despues de la funcion" + respuesta.allPeliculas[1].titulo)
    return respuesta.allPeliculas

}