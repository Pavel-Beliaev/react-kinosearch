import React from 'react';
import CustomButton from "../components/CustomButton/CustomButton";

const ErrorPage: React.FC = () => {
    return (
        <div className='container error'>
            <div className='error-block'>
                <h3>Error</h3>
                <p>Not Found</p>
                <CustomButton children={'Back'}/>
            </div>
        </div>
    );
};

export default ErrorPage;