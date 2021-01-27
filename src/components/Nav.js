import React from 'react';
import PropTypes from 'prop-types';
import Status from './Status';
import IconSvg from './IconSvg';
import { Link } from 'react-router-dom';

const Nav = (props) => {

    return (
        <div className='nav'>
            <Link to='/info'>
                <IconSvg />
            </Link>
            <Status status={props.name} onClick={props.onClick}/>
        </div>
    );
}

Nav.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
}

export default Nav;
