import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useStateValue} from '../../context/StateProvider'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

const Navbar = () => {
    const [{newlyAddedFavorite}, dispatch] = useStateValue()
    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

    return (
        <nav className='navbar'>
            <div className='container'>
                <ul className='ul'>
                    <div>
                        <li>
                            <Link to='/' className='heading'>
                                Rick & Morty FavChars
                            </Link>
                        </li>
                    </div>

                    <div className='navbarRow'>
                        <li>
                            <Link to='/'>
                                Home
                            </Link>
                        </li>

                        <li className='favorites'>
                            <Link to='/favorites' onClick={() =>
                                dispatch({
                                    type: 'ANNUL_NEWLY_ADDED_FAVORITE',
                                })}>
                                Favorites
                            </Link>

                            {newlyAddedFavorite > 0 ?
                                <div className='countCircle'>
                                    <p className='value'>{newlyAddedFavorite}</p>
                                </div>
                                :
                                null
                            }
                        </li>
                    </div>
                </ul>

                <div className='hamburger'>
                    {hamburgerIsOpen ?
                        <CloseIcon onClick={() => setHamburgerIsOpen(prev => !prev)} />
                        :
                        <MenuIcon onClick={() => setHamburgerIsOpen(prev => !prev)} />
                    }
                </div>

                <div className={hamburgerIsOpen ? 'hamburgerMenu open' : 'hamburgerMenu close'}>
                    <div className='menu'>
                        <ul>
                            <li>
                                <Link to='/' className='heading' onClick={() => setHamburgerIsOpen(false)}>
                                    Rick & Morty FavChars
                                </Link>
                            </li>

                            <li>
                                <Link to='/' onClick={() => setHamburgerIsOpen(false)}>
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to='/favorites' onClick={() => {
                                    dispatch({
                                        type: 'ANNUL_NEWLY_ADDED_FAVORITE',
                                    });

                                    setHamburgerIsOpen(false)
                                }}
                                >
                                    Favorites
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
