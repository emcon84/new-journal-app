import { authSlice, checkingCredential, login, logout } from '../../../src/store/auth/authSlice'
import { authenticatedState, demoUser, initialState } from '../../fixtures/authFixtures';


describe('Pruebas en authSlice', () => {

    test('debe devolver el estado inicial y llamarse "auth"', () => {

        const state = authSlice.reducer(initialState, {})
        // console.log(state)
        expect(authSlice.name).toBe('auth');
        expect(state).toEqual(initialState);

    })

    test('debe de realizar la autenticación', () => {

        const state = authSlice.reducer(initialState, login(demoUser))
        expect(state).toEqual({
            status: 'authenticated', //checking, not-authenticated, authenticated
            uid: demoUser.uid,
            email: demoUser.email,
            displayName: demoUser.displayName,
            photoURL: demoUser.photoURL,
            errorMessage: null,
        })

    })
    test('debe de realizar el logout sin argumentos', () => {

        const state = authSlice.reducer(authenticatedState, logout())
        expect(state).toEqual({
            status: 'not-authenticated', //checking, not-authenticated, authenticated
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage: undefined,
        })

    })
    test('debe de realizar el logout y mostrar un msj de error', () => {

        const errorMessage = 'Credenciales incorrectar'

        const state = authSlice.reducer(authenticatedState, logout(errorMessage))
        expect(state).toEqual({
            status: 'not-authenticated', //checking, not-authenticated, authenticated
            uid: null,
            email: null,
            displayName: null,
            photoURL: null,
            errorMessage
        })

    })
    test('debe de cambiar el estado a checking', () => {

        const state = authSlice.reducer(authenticatedState, checkingCredential())
        expect(state.status).toEqual('checking')

    })
})

