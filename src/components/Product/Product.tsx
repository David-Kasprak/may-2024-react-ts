import React, {FC} from 'react';
import {IProductModel} from "../../Models/IProductModel";


type TypeProps = {item: IProductModel}

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div className='product-div'>
            <h3>Title: {item.title}</h3>
            <img src={item.thumbnail} alt={item.title}/>
            <p><b>Description:</b> {item.description}</p>
            <p><b>Category:</b> {item.category}</p>
            <p><b>Price:</b> {item.price}</p>
        </div>
    );
};

export default Product;