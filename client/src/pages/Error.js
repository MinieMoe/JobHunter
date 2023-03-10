import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () =>{
    return (
        <Wrapper className="full-name">
            <div>
                <img src={img} alt="not foudn"/>
                <h3>Uh oh...Page not found</h3>
                <p>We can't seem to find the page you're looking for</p>
                <Link to='/'>Way Back Home</Link>
            </div>
        </Wrapper>
    );
}

export default Error