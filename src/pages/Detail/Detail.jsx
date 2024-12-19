import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Detail = () => {
    const params = useParams();
    const [data, setData] = useState({});

    useEffect(()=>{
        axios(`https://fakestoreapi.com/products/${params.id}`)
        .then(({data})=> setData(data))
    },[params])
    return (
        <div className="container">
            {
                JSON.stringify(data) === '{}'
                ? ''
                : <div className="row">
                    <div className="col-6">
                        <img className="detail-img" src={data.image} alt="" />
                    </div>

                    <div className="col-6">
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                        <p>{data.category}</p>
                        <p>${data.price}</p>
                        <button>buy</button>
                    </div>
                </div>
            }

        </div>
    );
}

export default Detail;
