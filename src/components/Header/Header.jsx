import './Header.css'

export const Header = ({ black }) => {

    return (
        <header className={black ? 'black' : ''}>
            <div className='header--logo'>
                <a href="/">
                    <img src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5-1.png" alt="Neflix" />
                </a>
            </div>
        </header>
    )
}