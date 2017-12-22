import { fork,call } from 'redux-saga/effects'

import { getAdDataFlow, getULikeDataFlow } from './homeSaga'
import { getLocatioFlow } from './wrapSaga'
import { getDetailFolw } from './detailSaga'
import { getCitiesFlow } from './citySaga'

export default function* rootSaga () {
    yield fork(getLocatioFlow);
    yield fork(getAdDataFlow);
    yield fork(getULikeDataFlow);
    yield fork(getDetailFolw);
    yield fork(getCitiesFlow);
}
