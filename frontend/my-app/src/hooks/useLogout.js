import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const logout = () => {

    localStorage.removeItem('user');

    localStorage.clear();
    sessionStorage.clear();

    dispatch({ type: 'LOGOUT' });

    window.location.href = '/login';

    };
    return { logout };
};