import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from '../../src/helpers/fileUpload';


cloudinary.config({
    cloud_name: 'dadqqe1wx',
    api_key: '942825937164136',
    api_secret: 'dCwrLoNYvvWUaHxtM1AXCF1X5Gg',
    secure: true
})


describe('Pruebas en fileUpload', () => {

    test('debe subir correctamente un archivo de imagen a cloudinary', async () => {

        const imageUrl = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg'
        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg')

        const url = await fileUpload(file)
        expect(typeof url).toBe('string');

        const segments = url.split('/');
        const imageId = segments[segments.length - 1].replace('.jpg', '');

        await cloudinary.api.delete_resources(['journal/' + imageId]);

    })

    test('debe de retornar null', async () => {

        const file = new File([], 'foto.jpg')

        const url = await fileUpload(file)
        expect(url).toBe(null);

    })
})

