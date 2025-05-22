import Header from './Header.js';
import Footer from './Footer.js';
import under_construction from '../assets/img/under_construction.jpg';

import { useIntl } from 'react-intl';

function Main() {
    const { formatMessage } = useIntl()
    return (
        <div>
            <Header />
            <div className="main">
                <div className="main__title">{formatMessage({ id: 'main.title' })}</div>
                <img className="main__image" src={under_construction} alt="under construction"></img>
            </div>
            <Footer />
        </div>
    );
}

export default Main;