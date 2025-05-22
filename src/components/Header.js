import { useIntl } from 'react-intl';
import LanguageSwitcher from './functional/LanguageSwitcher.js';

function Header() {
    const { formatMessage } = useIntl()

    return (
        <div className='header'>
            <LanguageSwitcher />
            <h1 className='header__title'>{formatMessage({ id: 'header.title' })}</h1>
        </div>
    )
}

export default Header;