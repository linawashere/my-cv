import rsLogo from '/public/images/rs-school-logo.svg';

const Footer = () => {
    return (
        <footer className="footer">
            <ul className="footer__list">
                <li><a href="https://github.com/linawashere">GitHub</a></li>
                <li>2026</li>
                <li>
                    <a href="https://rs.school/courses/javascript-ru">
                        <img className="footer__list-img" src={rsLogo} alt="rs school img" />
                    </a>
                </li>
            </ul>
        </footer>
    )
}

export default Footer;