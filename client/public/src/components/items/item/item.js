import React from 'react'
import { deleteItem } from '../../../api'
export default function Item({priority, item, createAt}) {
return (
<>
<div>
<p>priority: {priority}</p>
<h3>{item}</h3>
<span>{createAt}</span>
</div>
<button onClick={() => {setId(itemId)}}>Update</button>
<button onClick={() => {dispatch(deleteItem(itemId))}}>Delete</button>
</>
)
}