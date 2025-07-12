import {Link, useLoaderData} from 'react-router-dom';

export default function CarPage(){
    const car = useLoaderData();
    //console.log(user)
    return (
        <div className="Main user-page">
            <div>
                <Link to="/cars">Back</Link>
                <h1>Cars</h1>
            </div>
            <img src={car.photo} alt='avatar' />
            <h2>Model: {car.model}</h2>
            <h2>Manufacturer: {car.manufacturer}</h2>
            <h2>Price: {car.price}</h2>
            <h2>Color: {car.color}</h2>
        </div>
    );
}