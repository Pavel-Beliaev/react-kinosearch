import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
import {ReactComponent as PhoneIcon} from "../public/SVG/phone.svg";
import {ReactComponent as EmailIcon} from "../public/SVG/email.svg";
import {ReactComponent as LocationIcon} from "../public/SVG/location.svg";
import CustomTextarea from "../components/CustomFields/CustomTextarea";

const ContactUs = () => {
    return (
        <div className='frameworks-container'>
            <div className='map'>
                <div className='map-wrapper'>
                    <div className='map_inside'>
                        {/*map*/}
                    </div>
                </div>
            </div>
            <div className='form'>
                <div className='form-title'>
                    <h2>Send a message</h2>
                </div>
                <div className='form-block'>
                    <form action="">
                        <CustomInput children={'Name'}/>
                        <CustomInput children={'Email'}/>
                        <CustomInput children={'Where did you hear about us?'}/>
                        <CustomTextarea children={'Message'}/>
                        <CustomButton children={'Send message'}/>
                    </form>
                    <div className='form-colum'>
                        <div className='form-row'>
                            <span><LocationIcon/></span>
                            <div className='form-text'>
                                <h4>Address</h4>
                                <p>Solar system, planet Earth</p>
                            </div>
                        </div>
                        <div className='form-row'>
                            <span><EmailIcon/></span>
                            <div className='form-text'>
                                <h4>Email</h4>
                                <p>philipsxenium93@gmail.com</p>
                            </div>
                        </div>
                        <div className='form-row'>
                            <span><PhoneIcon/></span>
                            <div className='form-text'>
                                <h4>Telephone</h4>
                                <p>+66 65 335 62 63</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;