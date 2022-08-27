
export const initialState = {
    isSaving: false,
    messagedSave: '',
    notes: [],
    active: null
}

export const isSaving = {
    isSaving: true,
    messagedSave: '',
    notes: [],
    active: null
}

export const emptyNotes = {
    isSaving: false,
    messagedSave: '',
    notes: [{
        title: '',
        body: '',
        date: '',
        imageUrls: []
    }],
    active: null
}
export const activeNotes = {
    isSaving: false,
    messagedSave: '',
    notes: [],
    active: {
        title: 'demo1',
        body: 'body demo journal',
        date: '12354889',
        imageUrls: ['https://foto.jpg']
    }
}
export const notes = {
    isSaving: false,
    messagedSave: '',
    notes: [{
        title: 'demo1',
        body: 'body demo journal',
        date: '12354889',
        imageUrls: ['https://foto.jpg']
    }],
    active: null
}
export const saving = {
    isSaving: true,
    messagedSave: '',
    notes: [{
        title: 'demo1',
        body: 'body demo journal',
        date: '12354889',
        imageUrls: ['https://foto.jpg']
    }],
    active: null
}
export const update = {
    isSaving: false,
    messagedSave: 'nota actualizada correctamente',
    notes: [{
        title: 'demo ',
        body: 'body demo journal',
        date: '12354889',
        imageUrls: ['https://foto.jpg']
    }],
    active: null
}
export const photosToActiveNotes = {
    isSaving: false,
    messagedSave: '',
    notes: [{
        title: 'demo2',
        body: 'body demo journal2',
        date: '12354889',
        imageUrls: ['https://foto.jpg', 'https://foto02.jpg']
    }],
    active: null
}
export const notesLogout = {
    isSaving: false,
    messagedSave: '',
    notes: [{
        title: '',
        body: '',
        date: '',
        imageUrls: []
    }],
    active: null
}
export const deleteNote = {
    isSaving: false,
    messagedSave: '',
    notes: [],
    active: null
}

export const DemoNotesEmpty = {
    title: '',
    body: '',
    date: '',
    imageUrls: []
}

export const DemoNotes = {
    title: 'demo1',
    body: 'body demo journal',
    date: '12354889',
    imageUrls: ['https://foto.jpg']
}
export const DemoNotesUpdates = {
    title: 'demo actualizada',
    body: 'body demo journal actualizada',
    date: '12354889',
    imageUrls: ['https://foto-actualizada.jpg']
}