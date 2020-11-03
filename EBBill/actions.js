/*
 *
 * EB Bill actions
 * 
 */

import {
  UPDATE_FIELD,
  SHOW_ERR,
  FETCH_EB_PROV_DRA,
  EBB_SUBMIT_DRA,
  RESTORE_MOD_DATA,
  UPDATE_ELEC_PROVIDER_FIELD,
  RESTORE_ELEC_PROVIDER_FIELD,
  SELECTED_EBB_BILL
} from './constants'
 

export function updateField(datapack) {
  return {
    type: UPDATE_FIELD,
    ...datapack
  };
} 

export function showErr(datapack) {
  return {
    type: SHOW_ERR,
    ...datapack
  };
}

export function fetchEBProviders() {
  return {
    type: FETCH_EB_PROV_DRA,
  };
}

export function submitEBBill(datapack) {
  return {
    type: EBB_SUBMIT_DRA,
    ...datapack
  };
}

export function restoreModuleToInitState(moduleName) {
  return {
    type: RESTORE_MOD_DATA,
    moduleName
  }
} 

export function updateProviderList(val) {
  return {
    type: UPDATE_ELEC_PROVIDER_FIELD,
    val
  };
}

export function restoreProviderField() {
  return {
    type: RESTORE_ELEC_PROVIDER_FIELD,
  };
}

export function selectedEbbill(val) {
  return {
    type: SELECTED_EBB_BILL,
    val
  }
}