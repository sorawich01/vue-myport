import Api from './Api';

export default {

	About(){
		return Api().get('calculator');
	},
	GetdataFromFirebase(){
		return Api().get('myinformation');
	},

	Calculator (cendentials,type) {
		switch (type){
			case 'Addition':
			return Api().post('calculator/plus', cendentials);
			case 'Subtraction':
			return Api().post('calculator/minus', cendentials);
			case 'Multiplication':
			return Api().post('calculator/multi', cendentials);
			case 'Division':
			return Api().post('calculator/divide', cendentials);
			case 'About':
			return Api().get('calculator');
		}
	}
}