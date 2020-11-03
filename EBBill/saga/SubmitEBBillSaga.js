import axios from 'axios';
import { put, call, takeLatest } from 'redux-saga/effects';
import {
	EBB_SUBMIT_DRA,
	EBB_SUBMIT_DONE,
	EBB_SUBMIT_API
} from '../constants';
import { push } from 'react-router-redux';
import { BTOAST_SHOW } from '../../Btoast/constants';
import { pushHeaders } from '../../../CmnHeaders';
import log from '../../../loggerConfig';
import { BUPDEBBVerifying } from '../../../urls';
import { delay } from 'redux-saga';

function* submitEBBWorker(action) {
	try {
		const { customerID, provider } = action;
		const httpArgs = [EBB_SUBMIT_API, { consumer_id: customerID, service_provider: provider, consent: 'Y' }, pushHeaders()];
		log({ req: httpArgs });
		let { data: respData } = yield call(axios.post, ...httpArgs);
		log({ resp: respData });
		if (respData.code === '200') {
			yield put(push(BUPDEBBVerifying));
		} else {
			yield put({ type: BTOAST_SHOW, msg: respData.msg });
		}
	} catch (e) {
		log({ error: e });
	} finally {
		yield put({ type: EBB_SUBMIT_DONE });
	}
}

export default function* submitEBBWatcher(action) {
	yield takeLatest(EBB_SUBMIT_DRA, submitEBBWorker)
}