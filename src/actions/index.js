const loadedData = ( newData ) =>{
    return {
        type: 'DATA_LOADED',
        payload: newData
    }
}
export {
    loadedData
};