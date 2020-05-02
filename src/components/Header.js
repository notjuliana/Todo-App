import React from 'react'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <div style={styles.header}>
            <h1> Todo App</h1>
            <div style={styles.link}>
            <Link 
            style={styles.link}
            to='/'>Home</Link> | 

            <Link 
            style={styles.link}
            to='/about'>About
            </Link>
            </div>
        </div>
    )
}

const styles = {
    header: {
    fontFamily: 'Bebas Neue',
    fontSize: '1.3em',
    color: '#ccc',
    letterSpacing: '2px',
    padding: '20px',
    
},

    link: {
        textDecoration: 'none',
        fontSize: '.9em',
        cursor: 'pointer',
        color: '#ccc',
        padding: '10px',
        marginTop: '10px',
    }
}


export default Header
