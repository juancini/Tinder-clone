import React from 'react';
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { Icon, IconButton } from '@material-ui/core';

const Header = () => {
    return (
        <div className="header">
            <IconButton>
                <PersonIcon className='header__icon' fontSize='large'/>
            </IconButton>
            <img
                className='header__logo' 
                src='https://1000marcas.net/wp-content/uploads/2019/12/Tinder-simbolo.jpg' 
                alt='tinder logo'/>
            <IconButton>
                <ForumIcon className='header__icon' fontSize='large'/>
            </IconButton>
        </div>
    )
}

export default Header
 