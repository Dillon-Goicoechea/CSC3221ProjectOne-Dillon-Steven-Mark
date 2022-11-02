import * as api from '../api/index';

export const createItem = (item) => async (dispatch) => {
    const { data } = await api.createItem(item);
    dispatch({ type: 'POST', payload: data });
    }

export const getItems = () => async (dispatch) => {
     const {data} = await api.getItems();
     dispatch({ type: 'GET', payload: data})
     }

export const updateItem = (id,item) => async (dispatch) => {
     const {data} = await api.updateItem(id,item);
     dispatch({ type: 'UPDATE', payload: id})
     }
export const deleteItem = (id) => async (dispatch) => {
     const { data } = await api.deleteItem(id);
     dispatch({ type: 'DELETE', payload: data });
     }
