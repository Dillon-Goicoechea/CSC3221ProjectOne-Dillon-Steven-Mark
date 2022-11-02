export default (items = [], action) => {
    switch (action.type) {
    case 'POST':
    return [...items, action.payload];
    case 'GET':
    return action.payload;
    case 'UPDATE':
    return items.map(item => item._id === action.payload._id ?   action.payload : item);
    case 'DELETE':
    return items.filter(item => item._id !== action.payload);
    default:
    return items;
    }
    }