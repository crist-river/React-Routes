import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <Navbar bg='primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <img src='public/newhome.webp' width='50px' alt='home' />
            <Link class='nav-item nav-link' to='./'> Home </Link>
            <img src='public/book-icon-png-free.png' width='35px' height='35px' alt='contacto' />
            <Link class='nav-item nav-link' to='./contacto'> Contacto </Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href='/'>Happy Cake</Navbar.Brand>
        <img src='public/minicake.png' width='45px' alt='cake ' />

        <Navbar.Toggle aria-controls='basic-navbar-nav' />

      </Container>
    </Navbar>

  )
}

export default Menu
