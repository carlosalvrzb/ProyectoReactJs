
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'
import '../NavBar/NavBar.css'

const NavBar = () => {
  return (
    
    <section className="container " style={{ marginLeft: 23}}>
      <Link to='/'>
              <img src="https://cdn.iconscout.com/icon/free/png-256/bird-299-1131175.png" alt="" />
      </Link>
      

      <div>
       <ul className="Category">
        <NavLink to='/category/Playeras para niño'>
          <li><a>Playeras para niño</a></li>
        </NavLink>

        <NavLink to='/category/Playeras para niña'>
           <li><a>Playeras para niña</a></li>
           </NavLink>
         
         <NavLink to='/category/Playeras en Oferta'>
           <li><a>Ofertas hasta un 40%</a></li>
         </NavLink>
          
          <NavLink to='/category/Proximos Lanzamientos'>
            <li><a>Proximos lanzamientos</a></li>
          </NavLink>
          
        </ul>    
      </div>  

              
                <NavLink style={{ marginLeft: 300}} className='btn btn-outline-primary' to='/cart'>
                  <CartWidget />
                </NavLink>
              
    </section>
  )
}

export default NavBar
