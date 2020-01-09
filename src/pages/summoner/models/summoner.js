import {getSummoners} from 'services/api'

export default {
    namespace: 'summoner',
    state: {
        summoners: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/summoner') {
                    return dispatch({
                        type: 'fetch'
                    })
                }
            })
        }
    },
    reducers: {
        get(state, action) {
            return {...state, ...action.payload}
        }
    },
    effects: {
        *fetch(action, {call, put}) {
            const summoners = yield call(getSummoners)
            console.log(summoners)
            yield put({
                type: 'get',
                payload: {
                    summoners: summoners
                }
            })
        }
    }
}