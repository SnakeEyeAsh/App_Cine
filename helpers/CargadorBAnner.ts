
import request, { gql } from "graphql-request";
import { ImageBanner } from "model/Types";
import { Platform } from "react-native"



const ip = Platform.OS==="android"? "10.0.2.2" : "localhost";
const URL = `http://${ip}:3000/graphql`

export async function CargadorBAnner(): Promise<Array<ImageBanner>> {

    console.log("entra en la funcion")

    const query = gql`
        query Banners {
            allBanners {
                id
                urlFoto
            }
        }
    `
    const respuesta = await request(URL,query);
    console.log("llego a despues de la funcion"+respuesta.allBanners[1])
    return respuesta.allBanners

}
