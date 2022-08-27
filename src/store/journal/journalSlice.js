import { createSlice } from '@reduxjs/toolkit'

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false,
        messagedSave: '',
        notes: [],
        active: null
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNotes: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNotes: (state, action) => {
            state.active = action.payload;
            state.messagedSave = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state) => {
            state.isSaving = true;
            state.messagedSave = ''
        },
        updateNotes: (state, action) => {
            state.isSaving = false;
            //actualizamos la nota verificando el Id que viene en la accion y si coincide retornamos, 
            //para poder mostrarlas actualizadas en la SideBar
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note;
            })
            state.messagedSave = `nota actualizada correctamente`
        },
        setPhotosToActiveNotes: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload];
            state.isSaving = false;
        },
        clearNotesLogout: (state) => {
            state.isSaving = false;
            state.messagedSave = '';
            state.notes = [];
            state.active = null
        },
        deleteNoteById: (state, action) => {
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload)
        },
    },
})

export const {
    savingNewNote,
    addNewEmptyNotes,
    setActiveNotes,
    setNotes,
    setSaving,
    updateNotes,
    setPhotosToActiveNotes,
    clearNotesLogout,
    deleteNoteById
} = journalSlice.actions