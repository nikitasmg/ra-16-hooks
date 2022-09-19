import React, {useEffect, useState} from 'react';
import s from './detail.module.scss'
import axios from "axios";

const Detail = ({item}) => {
    const [person, setPerson] = useState({})
    const [avatar, setAvatar] = useState('')
    const getItem = async () => {
        if (!item) return
        const resp = await axios.get(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${item.id}.json`)
        await setPerson(resp.data)
        await setAvatar(resp.data.avatar)
    }
    useEffect(() => {
        getItem()
    }, [item.id])
    return (
        <div>
            <div className={s.imgContainer}>
                <img className={s.img} src={avatar + `?${item.id}`} alt="avatar"/>
            </div>
            <div className={s.element}>{person.name}</div>
            {
                person.details &&
                <>
                    <div className={s.element}>City: {person?.details.city}</div>
                    <div className={s.element}>Company: {person?.details.company}</div>
                    <div className={s.element}>Position: {person?.details.position}</div>
                </>
            }

        </div>
    );
};

export default Detail;