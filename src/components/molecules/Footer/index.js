import React from 'react';
import './footer.scss';
import { ICFacebook, ICInstagram, ICTwitter, LogoAntz } from '../../../assets';

const  Icon = ({img}) => {
    return (
        <div className="icon-wrapper">
            <img className="icon-medsos" src={img} alt="icon" />
        </div>
    )
}

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div>
                    <img className="logo" src={LogoAntz} alt="logo" />
                </div>
                <div className="social-wrapper">
                    <Icon img={ICTwitter}/>
                    <Icon img={ICInstagram}/>
                    <Icon img={ICFacebook}/>
                    {/* <Icon img={}/>
                    <Icon img={}/>
                    <Icon img={}/> */}
                </div>
            </div>
            <div className="copyright">
                <p>Copyright &copy;</p>
            </div>
        </div>
    )
}

export default Footer
