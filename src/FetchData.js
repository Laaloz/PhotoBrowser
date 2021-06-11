import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";

//Creating useState and useEffect
function FetchData() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetchItems();
    }, []);

    //fetch items from api/json file "http://jsonplaceholder.typicode.com/photos"
    const fetchItems = async () => {
        const data = await fetch("http://jsonplaceholder.typicode.com/photos");

        const items = await data.json();
        console.log(items);
        setItems(items);
    };

    //Using map to handle each items --->
    //using Link to select page --->
    return (
        <div className="container">
            <div className="images">
                {items.map((item) => (
                    <Link to={`/PhotoPage/${item.id}`}>
                        <img
                            className="image"
                            src={item.thumbnailUrl}
                            alt={item.title}
                            loading="lazy"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default FetchData;
