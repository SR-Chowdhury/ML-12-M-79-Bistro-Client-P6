import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const useMenu = () => {

    const [menu, setMenu] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        fetch('http://localhost:5000/menu')
            .then(res => res.json())
            .then(data => {
                // const result = data.filter(item => item.category === category);
                setMenu(data);
                setLoading(false);
            })
            .catch(err => console.log(err.message))
    }, []);

    return [menu, loading];
};

export default useMenu;