import React, {FC, useState} from 'react';
import {Table} from 'antd';
import {MovieCredits, TablePeopleActingType} from "./types";
import './table.scss'
import {columns} from "./config_table";
import {Switcher} from "../../Switcher/Switcher";

export const TablePeopleActing:FC<TablePeopleActingType> = ({movieCredits, tvCredits}) => {
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
                dataSource={switcher === 0
                    ? movieCreditsData
                    : tvCreditsData
                }
            />
        </div>
    );
};