import React from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import IconSvg from './IconSvg';

const Nav = (props) => {

    return (
        <div className='nav'>
            <IconSvg />
            <Status status={props.name} onClick={props.onClick}/>
        </div>
    );
}

Nav.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
}

export default Nav;
