const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <a href="https://github.com/linawashere">
                    <img src="src\assets\images\photo_2025-07-10_13-41-10.jpg" alt="logo" />
                </a>
            </div>
            <nav>
                <ul className="header__nav">
                    <li>
                        <a href="#skills">Skills</a>
                    </li>
                    <li>
                        <a href="#codeexample">Code example</a>
                    </li>
                    <li>
                        <a href="#experience">Expirience</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;