/**
 *
 * ProcessingFeeReduction
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectProcessingFeeReductionEBbill } from './selectors';
import reducer from './reducer';
import saga from './saga';
import Form from './form';
import { updateField, showErr, fetchEBProviders, submitEBBill, restoreModuleToInitState, updateProviderList, restoreProviderField, selectedEbbill } from './actions';
import { BREmail } from 'BRegex';
import commonMsg from '../../../components/Common/messages';
import { injectIntl } from 'react-intl';
import VerifyDetails from 'components/ExtraDetails/EBBill/VerifyDetails';
import Providers from './provider';
import evLog from '../../../EventLogger';
import Info from './info';


export class EbBillCon extends React.PureComponent {
    changeField(name, val, regex) {
        const { updateField } = this.props;
        // If field is provider, then dont check the regex as the val is an identifier which contains the underscore
        if ((regex && regex.test(val)) || name === 'provider') {
            updateField({ form: 'ebbill', field: name, val });
        }
    }

    submitEBBill(e) {
        e.preventDefault();
        const { ebbill: { customerID, provider }, submitEBBill, showErr, intl: { formatMessage } } = this.props;
        const { bmEm } = commonMsg;
        do {
            if (!provider.v) {
                showErr('provider', formatMessage(bmEm));
                break;
            } else if (!customerID.v) {
                showErr('customerID', formatMessage(bmEm));
                break;
            } else {
                const groupName = sessionStorage.getItem('PDgroupName');
                const offerName = sessionStorage.getItem('nachOfferName');
                evLog('PD', JSON.stringify({params: {groupName, offerName, actionTriggered: 'Electricity Board selected'}, action: 'Price Discovery'}));
                evLog('PD', JSON.stringify({params: {groupName, offerName, actionTriggered: 'Electricity Bill details submitted'}, action: 'Price Discovery'}));
                submitEBBill({ customerID: customerID.v, provider: provider.id });
                break;
            }
        } while (0);
    }

    updateInput(val) {
        this.props.updateProviderList(val)
    }

    selectedEbb(val){
        this.props.selectedEbbill(val)
    }

    componentDidMount() {
        const groupName = sessionStorage.getItem('PDgroupName');
        const offerName = sessionStorage.getItem('nachOfferName');
        evLog('PD', JSON.stringify({params: {groupName, offerName, actionTriggered: 'Electricity Board Selection initiated'}, action: 'Price Discovery'}));
        this.props.fetchEBProviders();
    }

    componentWillUnmount() {
		this.props.restoreState();
	}

    routeScreen() {
        const { match } = this.props;
        switch (match.params.whichscreen) {
            case 'form':
                return <Form
                    {...this.props}
                    onChange={this.changeField.bind(this)}
                    onSubmit={this.submitEBBill.bind(this)}
                />
            case 'verifying':
                return <VerifyDetails {...this.props} />
            case 'providerlist' :
                return <Providers
                    {...this.props}
                    updateInput = { this.updateInput.bind(this) } 
                    selectedEbb = { this.selectedEbb.bind(this) }
                />
            case 'info' :
                return <Info {...this.props} />
        }
    }

    render() {
        return this.routeScreen();
    }
}


const mapStateToProps = createStructuredSelector({
    ebbill: makeSelectProcessingFeeReductionEBbill(),
});

function mapDispatchToProps(dispatch) {
    return {
        updateField: datapack => {
            dispatch(updateField(datapack))
        },
        showErr: (name, msg) => {
            dispatch(showErr({ msg, form: 'ebbill', field: name }))
        },
        fetchEBProviders: () => {
            dispatch(fetchEBProviders())
        },
        submitEBBill: datapack => {
            dispatch(submitEBBill(datapack))
        },
        restoreState: () => {
			dispatch(restoreModuleToInitState('ebbill'))
        },
        updateProviderList: (val) => {
            dispatch(updateProviderList(val))
        },
        restoreProviderField: () => {
            dispatch(restoreProviderField())
        },
        selectedEbbill: (val) => {
            dispatch(selectedEbbill(val))
        }
    };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'processingFeeReduction', reducer });
const withSaga = injectSaga({ key: 'processingFeeReduction', saga });

export default compose(
    withReducer,
    withSaga,
    withConnect,
    injectIntl
)(EbBillCon);
