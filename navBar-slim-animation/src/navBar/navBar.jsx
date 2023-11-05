import './navBar.css'
import { useState, useEffect } from 'react';

export function NavBar({ links }) {
    const [isMenuActive, setMenuActive] = useState(false);
    const [isScrolling, setScrolling] = useState(false);

    useEffect(() => {
        // Agregar un listener de evento para el scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Eliminar el listener de evento al desmontar el componente
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 20) { // Cambia 50 a la cantidad de desplazamiento que desees
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    const navBarClass = isScrolling ? 'navBar-scrolling' : 'navBar';
    const navBarIconClass = isMenuActive ? 'navBar-icon-cross' : 'navBar-icon-menu';
    let navBarIconId='';
    let navBarMenuClass = '';
    
    

    if (isScrolling){            //Se hace scroll
        if(!isMenuActive){       //Si el menu no esta activo
            navBarMenuClass='navBar-menu-hidden';                 //invisible
            navBarIconId='';
        }else{                  //Si el menu esta activo
            navBarMenuClass='navBar-menu-scrolling';                     //visible
            navBarIconId='';
        }
    }else{                      //No scroll 
            navBarMenuClass='navBar-menu';                        //visible
            navBarIconId='navBar-Icon-hidden';
    }
    
        
            
        
            

   
        
    
    const openCloseMenu = (e) => {
        if (e.target.className === 'navBar-icon-cross' || e.target.className === 'navBar-menu') {
            setMenuActive(false);
        } else {
            setMenuActive(true);
        }
    };

    return (
        <article className={navBarClass}>
            <section className={navBarIconClass} id={navBarIconId} onClick={openCloseMenu}>
            </section>
            <section className={navBarMenuClass} onClick={openCloseMenu}>
                {links.map((link, indx) => (
                    <a key={indx} href={link[0]} className='navBar-menu-a'>{link[1]}</a>
                ))}
            </section>
        </article>
    )
}
