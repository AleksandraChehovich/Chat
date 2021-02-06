import React from 'react';
import PropTypes from 'prop-types';

const ScrollArrow = (props) => {
    
    return (
    <svg 
        onClick={props.onClick}
        className='scroll'
        fill="#9ec2e6"
        id="Layer" 
        height="512" 
        viewBox="0 0 64 64" 
        width="512" 
        xmlns="http://www.w3.org/2000/svg">
        <path d="m32 8c-1.104 0-2 .896-2 2v39.899l-14.552-15.278c-.761-.799-2.026-.832-2.828-.069-.8.762-.831 2.027-.069 2.827l16.62 17.449c.756.756 1.76 1.172 2.829 1.172 1.068 0 2.073-.416 2.862-1.207l16.586-17.414c.762-.8.73-2.065-.069-2.827-.799-.763-2.065-.731-2.827.069l-14.552 15.342v-39.963c0-1.104-.896-2-2-2z"/>
    </svg>   
    )
}

ScrollArrow.propTypes = {
    onClick: PropTypes.func
}

export default ScrollArrow;
