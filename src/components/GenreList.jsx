import { useState, useEffect } from 'react';

function GenreList() {
    const [list, setList] = useState([]);

    useEffect(() => {
        const fetchM = async() => {
            const API_KEY = '511bb625acd4097a048afed6c84c6fd1';
            const BASE_URL = 'https://api.themoviedb.org/3';
            const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en`;

            try {
                const response = await fetch(url);
                const data = await response.json();
                
                setList(data.genres || []); // Update state only if genres exist

            } catch (error) {
                console.error("Error fetching genres:", error);
                setList([]); // Handle error case
            }
        };

        fetchM(); // Call the function inside useEffect
    }, []);

    function handleClick() {
        console.log(list);
    }
    return (
        <>
            <ul>
                {list.map(genre => (
                    <li key={genre.name}>{genre.name}</li>
                ))}
            </ul>
            <button onClick={handleClick}>log</button>
            {/* <pre>{JSON.stringify(list, null, 2)}</pre>  */}
        </>
    );
}

export default GenreList;