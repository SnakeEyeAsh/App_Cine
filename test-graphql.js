// Script de prueba para verificar la conexión GraphQL
const { request, gql } = require('graphql-request');

const URL = 'http://localhost:3000/graphql';

const sentencia = gql`
    query MyQuery {
        allBanners {
            id
            urlFoto
        }
    }
`;

async function testGraphQL() {
    console.log('Probando conexión a:', URL);
    try {
        const respuesta = await request(URL, sentencia);
        console.log('✓ Conexión exitosa!');
        console.log('Respuesta:', JSON.stringify(respuesta, null, 2));
        console.log('Número de banners:', respuesta.allBanners?.length || 0);
    } catch (error) {
        console.error('✗ Error en la conexión:');
        console.error('Mensaje:', error.message);
        if (error.response) {
            console.error('Response:', error.response);
        }
        if (error.request) {
            console.error('Request:', error.request);
        }
    }
}

testGraphQL();
