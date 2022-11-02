import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteItem} from '../../../_actions/items'
export default function Item({setId, priority, item, createAt, itemId}) {
const dispatch = useDispatch()
return (
<>
<div>
<h1>{priority}</h1>
<h3>{item}</h3>
<span>{createAt}</span>
<div>
<button onClick={() => {setId(itemId)}}>Update</button>
<button onClick={() => {dispatch(deleteItem(itemId))}}>Delete</button>
</div>
</div>
</>
)
}