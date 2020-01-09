import {getHerolist, getHeroDetails} from '../services/api';

export default {
  namespace: 'hero',
  state: 'hero',
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({pathname, query}) => {
        if (pathname === '/hero') {
          dispatch({
            type: 'fetch'
          })
        }
      })
    },
  },
  reducers: {
    update(state) {
      return `${state}_hero`;
    },
    save(state, action) {
      return {...state, ...action.payload}
    }
  },
  effects: {
    *fetch({ type, payload }, { put, call, select }) {
      const herolist = yield call(getHerolist)
      const herodetails = yield call(getHeroDetails, { ename: 110 });
      console.log(herodetails);
      yield put({
        type: 'save',
        payload: {
          heros: herolist
        }
      })
    },
  },
}
