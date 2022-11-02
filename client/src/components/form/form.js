import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import { createItem, updateItem } from '../../_actions/items.js';
import { useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import { createItem, updateItem } from '../../api';
export default function Form({setId, getId}) {
const { register, handleSubmit, reset, setValue } = useForm();
const item = useSelector(state => state.items.find((item) => item._id === getId ? item: null ))
const dispatch = useDispatch()
useEffect(() => {
if (getId !== 0) {
let keys = Object.keys(post);
keys.forEach((key) => setValue(key, item[key]))
}
}, [getId, post, setValue])
const onSubmit = (data) => {
if (getId === 0) {
dispatch(createItem(data))
reset()
} else {
dispatch(updateItem(getId, data))
reset()
setId(0)
}
}
return (
<>
<form onSubmit={handleSubmit(onSubmit)}>
<div>
<input type="int" name="priority" placeholder='Priority' {...register('priority')} />
</div>
<div>
<input type="text" name="item" placeholder='Item' {...register('item')} />
</div>
<button type="submit">Submit</button>
</form>
</>
)
}