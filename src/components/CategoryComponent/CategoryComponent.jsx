import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { Link } from "react-router-dom";

const CategoryComponent = ({category, limit}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        setProducts([])
        axios(
            limit
            ? `https://fakestoreapi.com/products/category/${category}?limit=${limit}`
            : `https://fakestoreapi.com/products/category/${category}`
        )
        .then(({data})=> setProducts(data))
    },[category,limit])
    return (
        <div>
            <h2>
                {
                    limit
                    ? <Link to={`category/${category}`}>{category}</Link>
                    : <>{category}</>
                }
            </h2>
            <div className="row" >
                {products.map ((item) =>{
                        return(
                            <div key={item.id} className="col-3">
                                <Card item={item} />
                            </div>
                        );
                    })}
            </div>

        </div>
    );
};

export default CategoryComponent;
