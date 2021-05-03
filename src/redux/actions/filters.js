const setSortBy = (name) => ({
    type: "SET_SORT_BY",
    payload:name,
})

const setCategory = (categoruIndex) =>({
    type: "SET_CATEGORY",
    payload: categoruIndex,
})