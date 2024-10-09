import React, {FC} from 'react';
import {apiProductsObject} from "../../data";
import {IProductModel} from "../../Models/IProductModel";
import Product from "../Product/Product";

const Products: FC = () => {
    const products: IProductModel[] = apiProductsObject.products
    return (
        <div className='products-div'>
            {
                products.map((product:IProductModel) => (<Product item={product}/>))
            }
        </div>
    );
};

export default Products;