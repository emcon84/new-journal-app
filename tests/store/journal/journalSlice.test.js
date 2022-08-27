import { addNewEmptyNotes, journalSlice, savingNewNote, setActiveNotes, setNotes, setSaving, updateNotes } from '../../../src/store/journal'
import { activeNotes, DemoNotes, DemoNotesEmpty, DemoNotesUpdates, emptyNotes, initialState, isSaving, notes, saving, update } from '../../fixtures/journalFixture'



describe('Pruebas en journalSlice', () => {

    test('debe de devolver el estado inicial y llamarse "journal"', () => {

        const state = journalSlice.reducer(initialState, {})
        expect(journalSlice.name).toBe('journal');
        expect(state).toEqual(initialState);

    })

    test('debe de llamar a savingNewNote y retornar isSaving en true', () => {

        const state = journalSlice.reducer(isSaving, savingNewNote(state))
        expect(state).toEqual({
            isSaving: isSaving.isSaving,
            messagedSave: '',
            notes: [],
            active: null
        })

    })

    test('debe de llamar a addNewEmptyNotes y poner la nota vacia en su state', () => {

        const state = journalSlice.reducer(emptyNotes, addNewEmptyNotes())
        expect(state).toEqual({
            isSaving: emptyNotes.isSaving,
            messagedSave: '',
            notes: [{
                title: DemoNotesEmpty.title,
                body: DemoNotesEmpty.body,
                date: DemoNotesEmpty.date,
                imageUrls: DemoNotesEmpty.imageUrls
            }],
            active: null
        })

    })
    test('debe de llamar a setActiveNotes y poner la nota con su data en el state', () => {

        const state = journalSlice.reducer(activeNotes, setActiveNotes(DemoNotes))
        expect(state).toEqual({
            isSaving: activeNotes.isSaving,
            messagedSave: '',
            notes: [],
            active: {
                title: DemoNotes.title,
                body: DemoNotes.body,
                date: DemoNotes.date,
                imageUrls: DemoNotes.imageUrls
            }
        })

    })
    test('debe de llamar a setNotes', () => {

        const state = journalSlice.reducer(notes, setNotes([DemoNotes]))
        expect(state).toEqual({
            isSaving: notes.isSaving,
            messagedSave: '',
            notes: [{
                title: DemoNotes.title,
                body: DemoNotes.body,
                date: DemoNotes.date,
                imageUrls: DemoNotes.imageUrls
            }],
            active: null
        })

    })

    test('debe de llamar a setSaving', () => {

        const state = journalSlice.reducer(saving, setSaving([DemoNotes]))
        expect(state).toEqual({
            isSaving: saving.isSaving,
            messagedSave: saving.messagedSave,
            notes: [{
                title: DemoNotes.title,
                body: DemoNotes.body,
                date: DemoNotes.date,
                imageUrls: DemoNotes.imageUrls
            }],
            active: null
        })

    })



})