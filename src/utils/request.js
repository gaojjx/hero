
const request = (url, options = {}) => {
    if (options.method && options.method.toUpperCase !== 'POST') {
        options.headers = {
            Accept: 'application/json',
            ContentType: 'application/json; charset=utf-8',
            ...options.headers,
        }
        options.body = JSON.stringify(options.body)
    }
    return fetch(url, options)
        .then(res => {
            const data = res.json()
            return data
        }).catch(e => { console.log(e) })
}

export default request