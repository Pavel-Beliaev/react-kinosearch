import {useLocation, useParams} from "react-router-dom";
import {useEffect, useState} from "react";

export const useTypePage = () => {

    const [isType, setIsType] = useState(false)
    const {id} = useParams()
    const {pathname} = useLocation()

    const pathnameType = pathname
        .split("/");
    const type = pathnameType.length > 3
        ? pathnameType[2]
        : pathnameType[1];

    useEffect(() => {
        if (type === 'person') {
            setIsType(true)
        } else setIsType(false)
    }, [id, type])

    return {isType, type, id}
}