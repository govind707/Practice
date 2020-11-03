 import { createSelector } from 'reselect';

// /**
//  * Direct selector to the EB Bill state domain
//  */

const selectProcessingFeeReductionDomainEBbill = (state) => state.getIn(['processingFeeReduction', 'ebbill']);

const makeSelectProcessingFeeReductionEBbill = () => createSelector(
  selectProcessingFeeReductionDomainEBbill,
  (substate) => substate.toJS()
);

 export {   
  makeSelectProcessingFeeReductionEBbill
 };