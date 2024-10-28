import React, {useEffect, useState} from 'react';
import {loadAuthResources} from "../services/api.service";
import {IProduct} from "../models/IProduct";

const AuthResourcesPage = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        loadAuthResources()
            .then(products => {
            if (products) {
                setProducts(products)
            }
        })
            .catch(reason => console.log(reason))
        return () => {
            console.log('useEffect is done');
        }
    }, []);
    return (
        <div>
            {JSON.stringify(products)};
        </div>
    );
};

export default AuthResourcesPage;