import React, {FC, useState} from 'react';
import {Table} from 'antd';
import {MovieCredits} from "./types";
import './table.scss'
import {columns} from "./config_table";
import {Switcher, Title} from "../../../../components";
import {CreditsPeopleCastType} from "../../../../Store/tmdbService/@types";

type PropsType = {
    movieCredits: CreditsPeopleCastType[] | undefined,
    tvCredits: CreditsPeopleCastType[] | undefined,
}
export const TablePeopleActing:FC<PropsType> = ({movieCredits, tvCredits}) => {
    const [switcher, setSwitcher] = useState(0);

    const movieCreditsData: MovieCredits[] | undefined = movieCredits
        ?.map((el) => ({
            key: el.credit_id,
            year: el.release_date
                ? Number(el.release_date
                    .match(/\d{4}/))
                : 0,
            descriptions: {
                movieID: el.id,
                title: el.title,
                character: el.character,
            }
        }))

    const tvCreditsData: MovieCredits[] | undefined = tvCredits
        ?.map((el) => ({
            key: el.credit_id,
            year: el.first_air_date
                ? Number(el.first_air_date
                    .match(/\d{4}/))
                : 0,
            descriptions: {
                tvID: el.id,
                name: el.name,
                character: el.character,
                episode_count: el.episode_count,
            }
        }))

    return (
        <div className='container table'>
            <Title>Acting</Title>
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
                dataSource={switcher === 0
                    ? movieCreditsData
                    : tvCreditsData
                }
            />
        </div>
    );
};