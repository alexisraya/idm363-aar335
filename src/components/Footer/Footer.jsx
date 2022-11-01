import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <div className="FooterContainer">
            <div className="FooterTextContainer">
                <p className="FooterText">Alexis Raya {year}</p>
                <p className="FooterText">All Hot Sauce Used for Educational Purposes</p>
            </div>
        </div>
    );
};

export default Footer;