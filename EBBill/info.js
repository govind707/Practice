import React from 'react';
import CommonInfo from './common';
import EnachImg from '../../../images/ic_auto_mandate.svg'
import messages from '../../../components/ExtraDetails/messages';
import { injectIntl } from 'react-intl';
import AssetValImg from '../../../images/pd/ic_asset_validation_big.svg';
import { BUPDEBBForm } from '../../../urls';
import evLog from '../../../EventLogger';
import Button from '../../../components/ExtraDetails/Button';
import TitleSection from '../../../components/ExtraDetails/TitleSection';
import TnCSection from '../../../components/ExtraDetails/TnCSection';

const Info = props => {
    const { watermarkVal, btnLoading, reduceVal, userDetails, constraint, requiredDetail, strictInfo, intl: { formatMessage }, goBackFn,  history: { push } } = props;
    const { elecConnection, ebbConnectionStep1, ebbConnectionStep2, ebbConnectionStep3, offInfoCon, ebbDesc } = messages;
    const groupName = sessionStorage.getItem('PDgroupName');
    const offerName = sessionStorage.getItem('nachOfferName');
    const meta = {
        title: formatMessage(elecConnection),
        width: '100%',
        titleImg: AssetValImg,
        steps: [
            formatMessage(ebbConnectionStep1),
            formatMessage(ebbConnectionStep2),
            formatMessage(ebbConnectionStep3),
        ],
        descAbtEvent: formatMessage(ebbDesc),
        btnText: formatMessage(offInfoCon),
        onBtnClick: () => {
            evLog('PD', JSON.stringify({params: {groupName, offerName, actionTriggered: `Clicked on continue on offer description`}, action: 'Price Discovery'}));
            push(BUPDEBBForm);
        }
    }
    return (
        <BPage helpIcon goFn = { goBackFn && goBackFn} >
        
        // title Secction

        <TitleSection title={meta.title} titleImg={meta.titleImg} width={meta.width} />

        // steps section
        <StepsSection steps={meta.steps} />

        // details section

        <DetailsSection requiredDetail={requiredDetail} userDetails={userDetails} constraint={constraint} />
            
        // TnC 

        <TnCSection formatMessage={formatMessage} />


        <Button
          onClick={meta.onBtnClick}
          btnText={meta.btnText}
          loading={btnLoading}
          {...props}
        />
        </BPage>
    )
}

export default injectIntl(Info);