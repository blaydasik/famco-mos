import { useIntl } from 'react-intl';
import { useContext } from 'react';
import { LocaleContext } from '../contexts/LocaleContext.js';

// Импорт иконок
import ruIcon from '../../assets/flag-icons/ru.ico';
import enIcon from '../../assets/flag-icons/us.ico';
import zhIcon from '../../assets/flag-icons/cn.ico';

function LanguageSwitcher() {
    const { locale } = useIntl();
    const { setLocale } = useContext(LocaleContext);

    const languages = [
        { code: 'ru', label: 'Рус', icon: ruIcon },
        { code: 'en', label: 'Eng', icon: enIcon },
        { code: 'zh', label: '中文', icon: zhIcon }    ];


    return (
        <div className="language-switcher">
            {languages.map((lang) => (
                <button
                    key={lang.code}
                    className={`language-switcher__btn ${locale === lang.code ? 'active' : ''}`}
                    onClick={() => setLocale(lang.code)}
                    aria-label={`Switch to ${lang.label}`}
                >
                    <img
                        src={lang.icon}
                        alt={`${lang.label} flag`}
                        className="language-switcher__icon"
                    />
                    <span className="label">{lang.label}</span>
                </button>
            ))}
        </div>
    );
};

export default LanguageSwitcher;