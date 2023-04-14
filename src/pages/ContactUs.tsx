import React from 'react';
import CustomInput from "../components/CustomFields/CustomInput";
import CustomButton from "../components/CustomButton/CustomButton";
import CustomTextarea from "../components/CustomFields/CustomTextarea";
import MapComponent from "../components/MapComponent";

const ContactUs = () => {
    return (
        <div className='frameworks-container'>
            <div className='map'>
                <div className='map-wrapper'>
                    <div className='map_inside'>
                        <MapComponent/>
                    </div>
                </div>
            </div>
            <div className='form'>
                <div className='form-title'>
                    <h2>Send a message</h2>
                </div>
                <div className='form-block'>
                    <form action="">
                        <CustomInput title={'Name'}/>
                        <CustomInput title={'Email'}/>
                        <CustomInput title={'Where did you hear about us?'}/>
                        <CustomTextarea title={'Message'}/>
                        <CustomButton children={'Send message'}/>
                    </form>
                    <div className='form-colum'>
                        <div className='form-row'>
                            <span><i className='fa fa-map-marker'></i></span>
                            <div className='form-text'>
                                <h4>Address</h4>
                                <p>Solar system, planet Earth</p>
                            </div>
                        </div>
                        <div className='form-row'>
                            <span><i className='fa fa-envelope-open'></i></span>
                            <div className='form-text'>
                                <h4>Email</h4>
                                <p>philipsxenium93@gmail.com</p>
                            </div>
                        </div>
                        <div className='form-row'>
                            <span><i className='fa fa-phone'></i></span>
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