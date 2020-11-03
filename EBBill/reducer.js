/*
 *
 * EB Bill reducer
 *
 */

import { fromJS } from 'immutable';

import {
	UPDATE_FIELD,
	SHOW_ERR,
	EBB_SUBMIT_DRA,
	RESTORE_MOD_DATA,
	UPDATE_ELEC_PROVIDER_FIELD,
	RESTORE_ELEC_PROVIDER_FIELD,
	SELECTED_EBB_BILL,
	FETCH_EB_PROV_SA,
	EBB_SUBMIT_DONE

  } from './constants';

import initialJSState from './initialState';

const initialState = fromJS(initialJSState);

function processingFeeReductionReducer(state = initialState, action) {
	switch (action.type) {  
		case UPDATE_FIELD:
			return state.setIn([action.form, action.field, 'v'], action.val)
				.setIn([action.form, action.field, 'ev'], false)
		case SHOW_ERR:
			return state.setIn([action.form, action.field, 'em'], action.msg)
				.setIn([action.form, action.field, 'ev'], true)
		case EBB_SUBMIT_DRA:
			return state.setIn(['ebbill', 'isEBBSubmitting'], true)	
		case RESTORE_MOD_DATA:
			return state.update(action.moduleName, obj => obj.mergeDeep(fromJS(initialJSState[action.moduleName])))		
		case UPDATE_ELEC_PROVIDER_FIELD:
			return state.setIn(['ebbill','provider','v'],action.val);
		case RESTORE_ELEC_PROVIDER_FIELD:
			return state.setIn(['ebbill','provider','v'],'');
		case SELECTED_EBB_BILL:
			return state.setIn(['ebbill','provider','v'],action.val.selectedElCompanyName)	
						.setIn(['ebbill','provider','id'],action.val.selectedElCompanyID);
		case FETCH_EB_PROV_SA:
			return state.setIn(['ebbill', 'isProvidersFetched'], true)
				.setIn(['ebbill', 'providers'], action.providers)				
		case EBB_SUBMIT_DONE:
			return state.setIn(['ebbill', 'isEBBSubmitting'], false)
		default:
			return state;
	}
}
		
export default processingFeeReductionReducer;