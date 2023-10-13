import React from 'react';
import { Link } from 'react-router-dom';
import styles from './footer.module.css';

//Assets
import PokemonPic from '../assets/pikachu.png';
import LocationPic from '../assets/pointer.png';
import ItemsPic from '../assets/pokeball.png';

const Header = () => {
    return (
        <footer className={styles.footer}>
            <Link className={styles.footerLink} to="/pokemons">
                <img className={styles.footerIcon} src={ PokemonPic } alt='pikachu' />
                Pokemons
            </Link>
            <Link onClick={ (event) => event.preventDefault() } className={styles.footerLink} to="/items">
                <img className={styles.footerIcon} src={ LocationPic } alt='pointer' />
                Items
            </Link>
            <Link onClick={ (event) => event.preventDefault() } className={styles.footerLink} to="/map">
                <img className={styles.footerIcon} src={ ItemsPic } alt='pokeball' />
                Map
            </Link>
        </footer>
    );
}

export default Header;