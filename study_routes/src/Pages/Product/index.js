import { useParams } from 'react-router-dom';

export default function Product() { 

    const {id} = useParams()

    return(
        <h2> This is a Product to test for routes, with user {id}</h2>
    );
}