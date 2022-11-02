import React from 'react'
import { useSelector } from 'react-redux';
import Item from './item/item.js';
import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

export default function Items({setId}){
    const items = useSelector(state => state.posts)
    return (
        <>
            {items.map(item => {
             return (
                <Item key={item._id} setId={setId} itemId={item._id} priority={item.priority} item_JSON={item.item} createAt={dayjs(item.createdAt).format('MM/DD/YYYY')}/>
             )   
            })}
        </>
    )
}