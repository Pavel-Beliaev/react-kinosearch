import React from 'react';
import CustomButton from "../components/CustomButton/CustomButton";

const ErrorPage: React.FC = () => {
    return (
        <div className='error'>
            <div className='error-block'>
                <h3>Error</h3>
                <p>Not Found</p>
            </div>
        </div>
    );
};

export default ErrorPage;