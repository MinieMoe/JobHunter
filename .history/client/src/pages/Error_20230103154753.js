import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () =>{
    return (
        <Wrapper className="full-name">
            <div>
                <img src={img} alt="">
            </div>
        </Wrapper>
    );
}

export default Error