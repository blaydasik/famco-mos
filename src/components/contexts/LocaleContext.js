import { createContext } from 'react';

export const LocaleContext = createContext();

export function LocaleProvider({ children, setLocale }) {
    const val = "test1";
    return (
        <LocaleContext.Provider value={{ setLocale, val }}>
            {children}
        </LocaleContext.Provider>
    );
}