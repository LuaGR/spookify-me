export async function get () {
    return new Response('Contenido actualizado', {
        headers: {
            'Cache-Control': 'no-store'  // Esto asegura que no se cachee la respuesta
        },
    });
}