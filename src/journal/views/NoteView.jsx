
import { useEffect, useMemo, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DeleteOutlined, SaveOutlined, UploadOutlined } from '@mui/icons-material';
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.css';

import { useForm } from '../../hooks/useForm';
import { setActiveNotes, startDeletingNotes, startSaveNote, startUploadingFiles } from '../../store/journal';
import { ImageGallery } from '../components'



export const NoteView = () => {

    const dispatch = useDispatch()
    const fileInputRef = useRef()
    const { active: note, messagedSave, isSaving } = useSelector(state => state.journal)
    const { title, body, date, onInputChange, formState } = useForm(note)
    const dataString = useMemo(() => {
        const newDate = new Date(date);
        return newDate.toUTCString();
    }, [date])


    useEffect(() => {
        dispatch(setActiveNotes(formState))
    }, [formState])


    useEffect(() => {
        if (messagedSave.length > 0) {
            Swal.fire('Nota actualizada', messagedSave, 'success');
        }
    }, [messagedSave]);


    const onSaveNote = () => {
        dispatch(startSaveNote())
    }

    const onFileInputChange = ({ target }) => {
        if (target.files === 0) return;

        dispatch(startUploadingFiles(target.files))
    }

    const onDeletingNote = () => {
        dispatch(startDeletingNotes())
    }

    return (
        <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ mb: 1 }}>
            <Grid item>
                <Typography fontSize={39} fontWeight='light' >{dataString}</Typography>
            </Grid>
            <Grid item>

                <input
                    type="file"
                    multiple
                    ref={fileInputRef}
                    onChange={onFileInputChange}
                    style={{ display: 'none' }}

                />

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => fileInputRef.current.click()}

                >
                    <UploadOutlined />
                </IconButton>

                <Button
                    disabled={isSaving}
                    onClick={onSaveNote}
                    color="primary"
                    sx={{ padding: 2 }}
                >
                    <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <TextField
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={5}
                    name="body"
                    value={body}
                    onChange={onInputChange}
                />
            </Grid>

            <Grid container justifyContent='end'>
                <Button
                    color='error'
                    onClick={onDeletingNote}
                >
                    <DeleteOutlined />
                    Borrar
                </Button>
            </Grid>

            <ImageGallery images={note.imageUrls} />

        </Grid>
    )
}
