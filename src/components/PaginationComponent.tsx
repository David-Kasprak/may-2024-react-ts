import React, {FC, useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {apiService} from "../services/api.service";

type PaginationProps = {
flag: boolean
};

const PaginationComponent:FC<PaginationProps> = ({flag}) => {
    const [query, setQuery] = useSearchParams({page: '1'});

    const onClickPrevHandler = () => {
        const page = query.get('page');
        if (page && +page > 0) {
            let currentPage = +page;
            currentPage--;
            setQuery({page: currentPage.toString()})
        }
    };
    const onClickNextHandler = () => {
        const page = query.get('page');
        if (page) {
            let currentPage = +page;
            currentPage++;
            setQuery({page: currentPage.toString()})
        }
    };
    return (
        <div>
            <button onClick={onClickPrevHandler}>Previous</button>
            <button onClick={onClickNextHandler} disabled={flag}>Next</button>
        </div>
    );
};

export default PaginationComponent;