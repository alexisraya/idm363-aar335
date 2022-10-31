import './Footer.css';

const Footer = () => {
    const year = new Date().getFullYear();
    return(
        <div className="FooterContainer">
            <div className="FooterTextContainer">
                <p>Alexis Raya {year}</p>
                <p>All Hot Sauce Used for Educational Purposes</p>
            </div>
        </div>
    );
};

export default Footer;