import React, { useState, useEffect } from "react";

export default function FetchApi({ tipo }) {

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marycamila184/movies/movies')
            .then(response => response.json())
            .then(data => setData(data))
            .catch(err => console.error(err))
    }, []);

    if (tipo == 'loading') {
        if (!data) {
            return (
                <div className="text-center m-auto col-12">
                    <h4>Carregando...</h4>
                </div>
            );
        }
    }

    if (tipo == 'jsonGeral') {
        return (data);
    }

}