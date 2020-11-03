import React, { Component } from 'react';
import { injectIntl, FormattedMessage } from 'react-intl';
import messages from '../../../components/ExtraDetails/messages';
import BPage from '../../../BComponents/BPage';;
import { SearchCon, SearchGlass, CompanyListCon, CompanyListScrollCon } from '../../../components/BEmployment/skins';
import BInput from '../../../BComponents/BInput';
import { BankListItem, BackBtn } from '../../../components/BVerifyincome/skins';

class Providers extends Component {    
    
    componentDidMount() {
        // Empty the input field on page load
        this.props.restoreProviderField();
    }
    
    selectCompany(e) {
        //On selecting Electrical Company fetch the id and name
        const selectedElCompanyID = e.target.getAttribute('data-id');
        const selectedElCompanyName = e.target.getAttribute('data-name');
        if (selectedElCompanyName) {
            //Update the selected company details in the redux
            this.props.selectedEbb({selectedElCompanyID,selectedElCompanyName})
        }
    }

    render() {
        const { selectServiceProvider, search, offInfoCon } = messages;
        const { ebbill: { provider, providers }, intl: { formatMessage }, updateInput, history : { goBack } } = this.props;
         let elecCompanyList = providers.filter(s => (s.label).toLowerCase().includes((provider.v).toLowerCase()));
        return (
            <BPage title = {formatMessage(selectServiceProvider)} fixedHdr >
               <SearchCon>
                    <BInput 
                        eVis = { provider.ev }
                        eMsg = { provider.em }
                        name = 'provider'
                        value = { provider.v }
                        disabled = { false  }
                        onChange = { (e) => updateInput(e.target.value) }
                        type = 'text'
                        placeholder = {formatMessage(search)}
                        icon = 'icic_power_service_provider'
                    />  
                    <SearchGlass className = 'icic_search' />
                </SearchCon>
                <CompanyListCon>
                    <CompanyListScrollCon onClick = { this.selectCompany.bind(this) } >
                        { elecCompanyList && elecCompanyList.map((ele,index) => {
                                return(
                                    <BankListItem data-id = { ele.value } key = { index + 1 } data-name = { ele.label } >
                                        { ele.label }
                                    </BankListItem>
                                );
                            })
                        }
                    </CompanyListScrollCon> 
                </CompanyListCon>
                <BackBtn disabled = { !provider.v } onClick = { ()  => goBack() }><FormattedMessage {...offInfoCon} /> </BackBtn>
            </BPage>
        )
    }
}

export default injectIntl(Providers)