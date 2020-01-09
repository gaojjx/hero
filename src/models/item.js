import {getItems} from '../services/api'

export default {
    namespace: 'item',
    state: {
        items: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({pathname, query}) => {
                if (pathname === '/item') {
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
            const items = yield call(getItems)
            yield put({
                type: 'get',
                payload: {
                    items: items
                }
            })
        }
    }
}