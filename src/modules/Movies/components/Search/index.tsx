import React, {FC, useCallback, useState} from 'react';
import debounce from "lodash.debounce";
import {useAppDispatch, useAppSelector} from "../../../../Store/store";
import {setSearchValue} from "../../../../Store/movies/slice";
import {CustomInput} from "../../../../components/UI/CustomFields";

export const Search:FC = () => {
    const dispatch = useAppDispatch();

    const {searchValue} = useAppSelector(state => state.movies)

    const [isValue, setIsValue] = useState('');

    const debounceChangeInput = useCallback(
        debounce((str) => {
            dispatch(setSearchValue(str))
        }, 1000),
        []
    )

    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsValue(event.target.value);
        debounceChangeInput(event.target.value);
    }

    const cleanInput = () => {
        dispatch(setSearchValue(''))
        setIsValue('')
    }

    return (
        <div className='search'>
            <CustomInput
                value={isValue}
                onChange={changeInput}
                placeholder='Type to search'
            />
            <i className='fa fa-search'></i>
            {searchValue &&
                <span onClick={cleanInput}>
                    Clean
                </span>
            }
        </div>
    );
};