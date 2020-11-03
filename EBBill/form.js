import React from 'react';
import { injectIntl } from 'react-intl';
import BPage from '../../../BComponents/BPage';
import { PDSelCon, Bigheader, EBBBtnCon, StatImg, TncTXT } from '../../../components/ExtraDetails/skins';
import messages from '../../../components/ExtraDetails/messages';
import BInput from '../../../BComponents/BInput';
import { BREmailInput, BRAlphaNumeric } from '../../../BRegex';
import BBtn from '../../../BComponents/BBtn';
import BSelect from '../../../BComponents/BSelect';
import BSimpleInfo from '../../../BComponents/BSimpleInfo';
import infoImg from '../../../images/ic_info.svg';
import { Link } from 'react-router-dom';
import { BUSTnc, BUSPrivacy, BUPDEBBProviderList } from '../../../urls';
import BLabel from '../../../BComponents/BLabel';
import { SearchGlass } from '../../../components/BEmployment/skins';
import Button from '../../../components/ExtraDetails/Button';
import TnCSection from '../../../components/ExtraDetails/TnCSection';


const Form = props => {
	const { ebbill: { isProvidersFetched, isEBBSubmitting, customerID, provider, providers }, intl: { formatMessage }, onChange, onSubmit, history : { push } } = props;
	const { elecConnection, ebbProPlaceholder, ebbRegNumPlaceholder, emailSubmitBtn, tncHyperlink, ebbFormBySub, ppHyperlink, tncAnd, electricityInfo } = messages;
	return (
		<BPage helpIcon fixedHdr fixedBody loading={!isProvidersFetched} title = {formatMessage(elecConnection)}>
			<PDSelCon>
				<form onSubmit={onSubmit}>
					<BInput
						icon='icic_power_service_provider'
						value= { provider.v }
						eVis = { provider.ev }
						eMsg = { provider.em }
						onClick = { () => push(BUPDEBBProviderList) }
						placeholder={provider.v ? provider.v : formatMessage(ebbProPlaceholder)}
						label={formatMessage(ebbProPlaceholder)}
						name='provider'
						type = 'text'
						placeHolderClr = '#f2b100'
						placeHolderAlign = 'center'
						placeHolderOpacity = '1' //Because opacity's default value is set, prop is passed to modify it.  
					/>
					<SearchGlass className = 'icic_enter' color = '#fdd535' />
					<BInput
						name='customerID'
						eVis={customerID.ev}
						eMsg={customerID.em}
						value={customerID.v}
						onChange={(e) => onChange('customerID', e.target.value, BRAlphaNumeric)}
						type='text'
						placeholder={formatMessage(ebbRegNumPlaceholder)}
						icon='icic_power_reg_no'
					/>
					<br />
					<BLabel
						txt = {formatMessage(electricityInfo)}
					/>
					<TnCSection formatMessage={formatMessage} />

					<br />
					<Button
						btnText={formatMessage(emailSubmitBtn)}
						loading={isEBBSubmitting}
						{...props}
					/>
				</form>
			</PDSelCon>
		</BPage>
	)
}

export default injectIntl(Form);