import React, {useState} from 'react';
import {Table} from 'antd';
import type {ColumnsType, TableProps} from 'antd/es/table';
import {CreditsPeopleCastType} from "../../Store/tmdbService/@types";
import Switcher from "../Switcher/Switcher";
import {Link} from "react-router-dom";

export type TablePeopleActingType = {
    movieCredits: CreditsPeopleCastType[] | undefined,
    tvCredits: CreditsPeopleCastType[] | undefined,
}

interface MovieCredits {
    key: string;
    year: number;
    descriptions: {
        tvID?: number,
        movieID?: number,
        title?: string,
        character: string,
        name?: string,
        episode_count?: number
    }

}

const columns: ColumnsType<MovieCredits> = [
    {
        key: 'name',
        title: 'Year',
        dataIndex: 'year',
        width: 100,
        sorter: {
            compare: (a, b) => a.year - b.year,
        },
        align: "center",
        defaultSortOrder: "descend",
        className: 'table-year',
    },
    {
        key: 'name',
        title: 'Descriptions',
        dataIndex: 'descriptions',
        render: (value, record, index) => {
            return <div>
                <Link to={value.title
                    ? `/movies/${value.movieID}`
                    : `/tv/${value.tvID}`}>
                    {value.title
                        ? <span className='table-title'>{value.title}&nbsp;</span>
                        : <span className='table-title'>{value.name}&nbsp;</span>
                    }
                </Link>
                {value.episode_count &&
                    <span className='table-episodes'>({value.episode_count} episodes)&nbsp;</span>}
                {value.character &&
                    <span className='table-character'>as {value.character}</span>}
            </div>
        }
    },
];


const TablePeopleActing: React.FC<TablePeopleActingType> = ({movieCredits, tvCredits}) => {
    const [switcher, setSwitcher] = useState(0);
    const movieCreditsData: MovieCredits[] | undefined = movieCredits?.map((el) => ({
        key: el.credit_id,
        year: el.release_date ? Number(el.release_date.match(/\d{4}/)) : 0,
        descriptions: {
            movieID: el.id,
            title: el.title,
            character: el.character,
        }
    }))

    const tvCreditsData: MovieCredits[] | undefined = tvCredits?.map((el) => ({
        key: el.credit_id,
        year: el.first_air_date ? Number(el.first_air_date.match(/\d{4}/)) : 0,
        descriptions: {
            tvID: el.id,
            name: el.name,
            character: el.character,
            episode_count: el.episode_count,
        }

    }))

    return (
        <div className='container table'>
            <h2>Acting</h2>
            <div className='table-switcher'>
                <Switcher
                    color={'#ffffff'}
                    switcher={switcher}
                    setSwitcher={setSwitcher}
                    title2={'TV'}
                    title1={'Movie'}
                />
            </div>
            <Table<MovieCredits>
                bordered
                columns={columns}
                className='table-wrapper'
                pagination={false}
                dataSource={switcher === 0 ? movieCreditsData : tvCreditsData}
            />
        </div>
    );
};

export default TablePeopleActing;