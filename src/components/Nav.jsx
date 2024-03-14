import {} from 'react'
import { Link } from 'react-router-dom'
import '../styles.css'

function Nav() {
    return (
        <>
            <section className='nav'>
                <Link to='Home' className='tlink'>Home</Link>
                <Link to='Products' className='tlink'>Produtos</Link>
            </section>
        </>
    )
}

export default Nav