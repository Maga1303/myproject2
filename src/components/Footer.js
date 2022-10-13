import React from "react";
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacbookIcon from '@material-ui/icons/Facbook';
// import LinkedinIcon from '@material-ui/icons/Linkedin';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../pages/styles/Footer.css'


function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia"> 
                <InstagramIcon/><TwitterIcon/><FacebookIcon /><LinkedInIcon/>
            </div>
            <p>&copy;2021 pedrotechpizza.com</p>
        </div>
    )
}
export default Footer;