
export const fileUpload = async (file) => {

    // if (!file) throw new Error('No hay archivo para enviar')

    if (!file) return null

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dadqqe1wx/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal')
    formData.append('file', file)

    try {

        const res = await fetch(cloudUrl, { method: 'POST', body: formData })

        if (!res.ok) throw new Error('No se pudo subir imagen')
        const cloudResp = await res.json();

        return cloudResp.secure_url;

    } catch (error) {
        // console.log(error)
        // throw new Error(error.message)
        return null
    }
}