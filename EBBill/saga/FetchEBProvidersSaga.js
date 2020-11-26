import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import {
	FETCH_EB_PROV_DRA,
	FETCH_EB_PROV_SA,
	FETCH_EB_PROV_DONE,
	FETCH_EB_PROV_API
} from '../constants';
import { BTOAST_SHOW } from '../../Btoast/constants';
import { pushHeaders } from '../../../../CmnHeaders';
import log from '../../../loggerConfig';

function* fetchEBProvidersWorker() {
	try {
		const httpArgs = [FETCH_EB_PROV_API, pushHeaders()];
		log({ req: httpArgs });
		const { data: respData } = yield call(axios.get, ...httpArgs);
		log({ resp: respData });
		if (respData.code === '200') {
			const providersListRefined = (respData.model.providers).map(ele => ({ value: ele.id, label: ele.provider }));
			yield put({
				type: FETCH_EB_PROV_SA,
				providers: providersListRefined
			});
		} else {
			yield put({ type: BTOAST_SHOW, msg: JSON.stringify(respData) });
		}
	} catch (e) {
		log({ error: e });
	}
}

export default function* fetchEBProvidersWatcher() {
	yield takeLatest(FETCH_EB_PROV_DRA, fetchEBProvidersWorker)
}