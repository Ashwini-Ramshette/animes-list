import React from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav>
        
        <h1 className='size'>pogo</h1>
        <div>
        <input type="search" placeholder='search...'/>
        <button className='btn btn-danger'>search</button>
        </div>
       <Link to="/wishlist">wishlist</Link>
        </nav>

     );
}
 
export default Navbar;