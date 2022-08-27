import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from '../../firebase/providers'
import { clearNotesLogout } from '../journal'
import { checkingCredential, login, logout } from './authSlice'

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredential())

    }
}
export const startGoogleSignIn = (email, password) => {
    return async (dispatch) => {

        dispatch(checkingCredential())
        const result = await signInWithGoogle()
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))

    }
}

export const startCreatingUserWithEmailPassword = ({ email, password, displayName }) => {
    return async (dispatch) => {

        dispatch(checkingCredential());

        const result = await registerUserWithEmailPassword({ email, password, displayName });
        console.log('Result', result)
        if (!result.ok) return dispatch(logout(result.errorMessage));

        dispatch(login(result))

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {

    return async (dispatch) => {
        dispatch(checkingCredential());

        const result = await loginWithEmailPassword({ email, password });
        if (!result.ok) return dispatch(logout(result.errorMessage))

        dispatch(login(result))
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout())
    }
} 