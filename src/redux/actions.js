export const setUser = (user) => {
    return {
        type: "SET_USER",
        value: user
    }
}

export const removeIndex = (index) => {
    return {
        type: "REMOVE_INDEX",
        value: index
    }
}

export const addBusiness = (business) => {
    return {
        type: "ADD_BUSINESS",
        value: business
    }
}