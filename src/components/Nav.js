import React from 'react';
import PropTypes from 'prop-types';
import Circle from './Logo_circle';
import Status from './Status';
import { colors } from './Data';

const Nav = (props) => {

    let circleArray = colors.map(color => <Circle key={color.id} color={color.color} />)
    return (
        <div className='nav'>
            <div className='nav_logo'>
                <div className='logo'>
                    {circleArray}
                </div>
            </div>
            <Status status={props.name} onClick={props.onClick}/>
        </div>
    );
}

Nav.propTypes = {
    name: PropTypes.string,
    onClick: PropTypes.func
}

export default Nav;
