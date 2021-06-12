/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./photo.css";

//using match to match id from the FetchData and bringin the content to this page
function PhotoPage({ match }) {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetchItems();
        console.log(match);
    }, []);

    const fetchItems = async () => {
        const fetchItem = await fetch(
            `https://jsonplaceholder.typicode.com/photos/${match.params.id}`
        );
        const item = await fetchItem.json();
        setItem(item);
        console.log(item);

        const itemToString = JSON.stringify(fetchItem);
        console.log(itemToString);
    };

    return (
        <div className="container">
            <Link to="/">
                <button>Back to frontpage</button>
            </Link>
            <div className="pageItems">
                <h1>{item.title}</h1>
                <img
                    className="image"
                    loading="lazy"
                    src={item.url}
                    alt={item.title}
                />
            </div>
        </div>
    );
}

export default PhotoPage;
