import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Container from 'react-bootstrap/Container';

import { items } from "../data/data";


export const Detail = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const {id} = useParams();



    useEffect (() => {
        new Promise ((resolve,reject) => setTimeout(() =>resolve (items), 3000))
        .then((respuesta) => {
                const finded = respuesta.find ((item) => item.id === Number(id));
                setProduct(finded);
        })
        .finally(() =>setLoading(false));
    }, [id] );


    if (loading) return "espera";

    return(
    <Container className='d-flex mt-4'>
    <h1>Producto</h1>
    <h2>{product.titulo}</h2>
</Container>
    );
};

