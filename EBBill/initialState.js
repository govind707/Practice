const initialJSState = {
	isDataSubmitted: false,
	isDataSubmitting: false,
	ebbill: {
		provider: {
			ev: '',
			em: '',
			v: '',
			id: ''
		},
		customerID: {
			ev: '',
			em: '',
			v: ''
		},
		isEBBSubmitting: false,
		isProvidersFetched: false,
		providers: []
	}
}

export default initialJSState;