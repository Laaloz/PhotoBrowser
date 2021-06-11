import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./photo.css";

//using match to match id from the FetchData and bringin the content to this page
function PhotoPage({ match }) {
    const [item, setItem] = useState({});

    useEffect(() => {
        fetchItem();
        console.log(match);
    });

    const fetchItem = async () => {
        const fetchItem = await fetch(
            `http://jsonplaceholder.typicode.com/photos/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);
    };

    return (
        <div className="container">
            <Link to="/">
                <button>Back to frontpage</button>
            </Link>
            <div className="pageItems">
                <img
                    className="image"
                    src={item.url}
                    alt={item.title}
                    loading="lazy"
                />
                <h1>{item.title}</h1>
            </div>
        </div>
    );
}

export default PhotoPage;
