import React from 'react';
import notPicture from '../../public/PNG/placeholder.png'
import {Link} from "react-router-dom";

const MovieCard:React.FC = () => {
    return (
        <div className='film'>
            <img src={notPicture} alt="Prev. poster"/>
            <div className='film-info'>
                <span>horror</span>
                <h3>Name</h3>
                <p>short description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto cumque
                    laboriosam recusandae reiciendis similique tempore ullam vel. Ab alias corporis ducimus eos
                    explicabo facilis fuga odit quis quo tempora.</p>
                <div className='film-more'>
                    <p>
                        <Link className='film-button'
                           to="1">
                            Read more
                        </Link>
                    </p>
                    <span>18</span>
                </div>
            </div>
        </div>
    );
};

export default MovieCard;