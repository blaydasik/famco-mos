import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from 'react';
import { IntlProvider } from 'react-intl';
import messages_en from './locales/en.json';
import messages_ru from './locales/ru.json';
import messages_zh from './locales/zh.json';

import Main from './components/Main.js';
import { LocaleProvider } from './components/contexts/LocaleContext.js';

const App = () => {
  const [locale, setLocale] = useState(navigator.language.split(/[-_]/)[0]); // Автоопределение языка
  const messages = {
    en: messages_en,
    ru: messages_ru,
    zh: messages_zh
  }[locale] || messages_ru // Fallback

  return (
    <div className="app">
      <LocaleProvider setLocale={setLocale}>
        <IntlProvider locale={locale} messages={messages}>
          <Routes>
            <Route path="/" element={<Main />} />

            (//перенаправление всех других роутов)
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </IntlProvider>
      </LocaleProvider>
    </div>

  )
}

export default App;
