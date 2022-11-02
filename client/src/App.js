import React, { useState, useEffect } from 'react'
import Form from './components/form/form.js';
import { useDispatch } from 'react-redux';
import { getItems } from './_actions/items';
import Items from './components/items/items';
function App() {
const dispatch = useDispatch();
const [id, setId] = useState(0)
useEffect(() => {
dispatch(getItems);
}, [dispatch])
return (
<>
<Form setId={setId} getId={id}/>
<Items setId={setId}/>
</>
);
}
export default App;