import React from 'react';
import s from './list.module.scss'
const List = ({list, changeItem, activeItem}) => {

    const activeItemClass = (id) => {
        if (!activeItem) {
            return ''
        }
        if (activeItem.id === id) {
            return s.active
        } else {
            return ''
        }
    }
    return (
        <ul className={s.list}>
            {list.map(el =>
                <li
                    className={s.item + ' ' + activeItemClass(el.id)}
                    key={el.id}
                    onClick={() => changeItem(el)}
                >
                    {el.name}

                </li>)
            }
        </ul>
    );
};

export default List;