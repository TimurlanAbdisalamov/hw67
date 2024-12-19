import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
   const categories = useSelector(s => s.reducer.categories);
    return (
        <header>
            <h1><Link to={'/'}>Shop</Link></h1>

            <nav>
                {
                    categories.map(item =>{
                        return <Link to={`/category/${item}`} key={item} >{item}</Link>
                    })
                }
                <Link to={'/'}>home</Link>
                <Link to={'/cart'}>cart</Link>
            </nav>
        </header>
    );
}

export default Header;
