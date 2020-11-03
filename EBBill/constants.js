/*
 *
 * EB Bill constants
 *
 */

import { BBaseUrl } from '../../../HiveConfig';

export const UPDATE_FIELD = 'app/ProcessingFeeReduction/UPDATE_FIELD';
export const SHOW_ERR = 'app/ProcessingFeeReduction/SHOW_ERR';
export const FETCH_EB_PROV_DRA = 'app/ProcessingFeeReduction/FETCH_EB_PROV_DRA';
export const EBB_SUBMIT_DRA = 'app/ProcessingFeeReduction/EBB_SUBMIT_DRA';
export const EBB_SUBMIT_DONE = 'app/ProcessingFeeReduction/EBB_SUBMIT_DONE';
export const RESTORE_MOD_DATA = 'app/ProcessingFeeReduction/RESTORE_MOD_DATA';
export const UPDATE_ELEC_PROVIDER_FIELD = 'app/ProcessingFeeReduction/UPDATE_ELEC_PROVIDER_FIELD';
export const RESTORE_ELEC_PROVIDER_FIELD = 'app/ProcessingFeeReduction/RESTORE_ELEC_PROVIDER_FIELD';
export const SELECTED_EBB_BILL = 'app/ProcessingFeeReduction/SELECTED_EBB_BILL';
export const FETCH_EB_PROV_SA = 'app/ProcessingFeeReduction/FETCH_EB_PROV_SA';

export const EBB_SUBMIT_API = `${BBaseUrl}/me/pd?type=elec`;
export const FETCH_EB_PROV_API = `${BBaseUrl}/me/pd?type=elec`;