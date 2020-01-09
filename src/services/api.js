import request from "../utils/request"

export const getHerolist = () => {
    return request('/api/herolist.json')
}

export const getHeroDetails = param => {
    return request('/api/herolist.json', {
        method: 'POST',
        body: param
    })
}

export const getItems = () => {
    return request('/api/item.json')
}

export const getSummoners = () => {
    return request('/api/summoner.json')
}

export const getMing = () => {
    return request('/api/ming.json')
}
