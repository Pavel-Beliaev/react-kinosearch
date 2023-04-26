import React from 'react';
import notPicture from '../public/PNG/placeholder.png'
import Rating from "../components/Rating/Rating";
import SliderShow from "../components/SliderShow/SliderShow";
import PeopleCard from "../components/Cards/PeopleCard";
import {useParams} from "react-router-dom";
import {useGetDetailsMovieQuery} from "../Store/tmdbService/tmdb.api";


const MoviePage:React.FC = () => {
    const {id} = useParams()
    const {data} = useGetDetailsMovieQuery(Number(id))
    console.log(data)
    return (
        <div className='container'>
            <div className='page'>
                <h2>Synopsis</h2>
                <div className='page-synopsis'>
                    <img src={notPicture} alt="poster"/>
                    <div className='page-overview'>
                        <h3>Overview</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum cumque debitis doloribus impedit
                            nesciunt porro quaerat repudiandae. Aut dicta dolore iure odit sunt vitae. Dicta dolorum
                            laudantium
                            nulla quae repellendus.</p>
                    </div>
                    <div className='page-info'>
                        <div className='page-info-links'>twi face inst </div>
                        <div className='page-info-other'>
                            <h3>Status</h3>
                            <p>Released</p>
                        </div>
                        <div className='page-info-other'>
                            <h3>Original Language</h3>
                            <p>English</p>
                        </div>
                    </div>
                </div>
                <h2>Top Billed Cast</h2>
                <div>
                    {/*<SliderShow children={<PeopleCard/>} slideCount={5}/>*/}
                </div>
                {/*<div>*/}
                {/*    <h2>Media</h2>*/}
                {/*</div>*/}
                {/*<div className='container'>*/}
                {/*    <div>*/}
                {/*        <h2>Comments</h2>*/}
                {/*        */}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h2>Leave a comment</h2>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>

        </div>
    );
};

export default MoviePage;