import {Link} from 'react-router-dom';

export default function Cars(){
    return (
        <div className="Main">
            <h1>Cars</h1>
            <ul>
                <li><Link to='/cars/toyota'>Toyota Camry</Link></li>
                <li><Link to='/cars/bmw'>BMW 5 Series</Link></li>
                <li><Link to='/cars/tesla'>Tesla Model 3</Link></li>
                <li><Link to='/cars/audi'>Audi A6</Link></li>
                <li><Link to='/cars/kia'>Kia Sportage</Link></li>
            </ul>
        </div>
    );
}