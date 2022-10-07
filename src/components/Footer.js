import React from "react";
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import FacbookIcon from '@material-ui/icons/Facbook';
// import LinkedinIcon from '@material-ui/icons/Linkedin';
import AdUnitsIcon from '@mui/icons-material/AdUnits';
import AirplanemodeActiveSharpIcon from '@mui/icons-material/AirplanemodeActiveSharp';
import DirectionsBikeSharpIcon from '@mui/icons-material/DirectionsBikeSharp';
import HikingSharpIcon from '@mui/icons-material/HikingSharp';
import '../pages/styles/Footer.css'


function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia"> 
                <AdUnitsIcon/><AirplanemodeActiveSharpIcon/><DirectionsBikeSharpIcon/><HikingSharpIcon/>
            </div>
            <p>&copy;2021 pedrotechpizza.com</p>
        </div>
    )
}
export default Footer;