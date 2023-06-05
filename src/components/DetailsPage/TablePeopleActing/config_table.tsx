import {ColumnsType} from "antd/es/table";
import {MovieCredits} from "./types";
import {Link} from "react-router-dom";
import React from "react";

export const columns: ColumnsType<MovieCredits> = [
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
        render: (value) => {
            return <div>
                <Link to={value.title
                    ? `/all/movie/${value.movieID}`
                    : `/all/tv/${value.tvID}`
                }
                >
                    {value.title
                        ? <span className='table-title'>{value.title}&nbsp;</span>
                        : <span className='table-title'>{value.name}&nbsp;</span>
                    }
                </Link>
                {value.episode_count &&
                    <span className='table-episodes'>({value.episode_count} episodes)&nbsp;</span>
                }
                {value.character &&
                    <span className='table-character'>as {value.character}</span>
                }
            </div>
        }
    },
];