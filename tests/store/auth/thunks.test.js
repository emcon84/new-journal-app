
import { loginWithEmailPassword, logoutFirebase, signInWithGoogle } from '../../../src/firebase/providers'
import { checkingCredential, login, logout } from '../../../src/store/auth'
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword, startLogout } from '../../../src/store/auth/thunks'
import { clearNotesLogout } from '../../../src/store/journal'
import { demoUser } from '../../fixtures/authFixtures'


jest.mock('../../../src/firebase/providers')


describe('Pruebas en authThunks', () => {

    const dispatch = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('debe de invocar el checkingCredentials', async () => {

        await checkingAuthentication()(dispatch);
        expect(dispatch).toHaveBeenCalledWith(checkingCredential())
    })

    test('startGoogleSignIn debe de llamar a checkingCredential y login - exito', async () => {

        const loginData = { ok: true, ...demoUser };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test('startGoogleSignIn debe de llamar a checkingCredential y logout - error', async () => {

        const loginData = { ok: false, errorMessage: "error en login de Google" };
        await signInWithGoogle.mockResolvedValue(loginData);

        await startGoogleSignIn()(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    })

    test('startLoginWithEmailPassword debe de llamar a checkingCredential y login - exito', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456' }

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));

    })

    test('startCreatingUserWithEmailPassword debe de llamar a checkingCredential y login - exito', async () => {

        const loginData = { ok: true, ...demoUser };
        const formData = { email: demoUser.email, password: '123456', displayName: demoUser.displayName }

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(login(loginData));
    })

    test('startCreatingUserWithEmailPassword debe de llamar a checkingCredential y logout - error', async () => {

        const loginData = { ok: false, errorMessage: "error en login" };
        const formData = { email: null, password: null, displayName: null }

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));
    })



    test('startLoginWithEmailPassword debe de llamar a checkingCredential y logout - error', async () => {

        const loginData = { ok: false, errorMessage: "error en login con email y password" };
        const formData = { email: null, password: null }

        await loginWithEmailPassword.mockResolvedValue(loginData);

        await startLoginWithEmailPassword(formData)(dispatch)

        expect(dispatch).toHaveBeenCalledWith(checkingCredential());
        expect(dispatch).toHaveBeenCalledWith(logout(loginData.errorMessage));

    })

    test('startLogout debe de llamar a logoutFirebase, clearNotes y logout', async () => {

        await startLogout()(dispatch);

        expect(logoutFirebase).toHaveBeenCalled();
        expect(dispatch).toHaveBeenCalledWith(clearNotesLogout());
        expect(dispatch).toHaveBeenCalledWith(logout());

    })

})