import React from 'react';


const Home = () => {

        fetch('https://api.kinopoisk.dev/v1/movie/random', {
                method: 'GET',
                headers: {
                        'Accept': 'application/json',
                        'X-API-KEY': 'ZZ11XDW-57R4FQJ-MAQGVAK-12EKRXX'
                }
        })
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.error(error));

    return (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/><br/>
            <br/>
            <br/>
        </div>
    );
};

export default Home;