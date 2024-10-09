import React, {FC} from 'react';
import {IProductModel} from "../../Models/IProductModel";


type TypeProps = {item: IProductModel}

const Product: FC<TypeProps> = ({item}) => {
    return (
        <div>
            {
               <h3>{item.title}</h3>
            }
        </div>
    );
};

export default Product;