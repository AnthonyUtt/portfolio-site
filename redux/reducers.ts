import { ThemeDarkModeSetAction, THEME_DARK_MODE_SET, Theme } from './actions';

const initialThemeState: Theme = {
    darkMode: false,
};

export function themeStateReducer(state: Theme = initialThemeState, action: ThemeDarkModeSetAction): Theme {
    switch (action.type) {
        case THEME_DARK_MODE_SET:
            let mode = action.darkMode;
            return {
                ...state,
                darkMode: mode,
            };
        default:
            return state;
    }
};
