//
// Action Types
//

export const THEME_DARK_MODE_SET = 'THEME_DARK_MODE_SET';

//
// Other Constants
//

export interface Theme { darkMode: boolean };

//
// Type Interfaces
//

export interface ThemeDarkModeSetAction { type: typeof THEME_DARK_MODE_SET, darkMode: boolean };

//
// Action Creators
//

export function themeDarkModeSet(darkMode: boolean): ThemeDarkModeSetAction {
    return {
        type: THEME_DARK_MODE_SET,
        darkMode,
    };
};
