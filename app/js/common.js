function getData($type, $val) {
	var typeCoin = $type;
	var currSymbol;
	var currencyURL = 'https://apiv2.bitcoinaverage.com/indices/global/ticker/' + $type + $val;
	$.ajax({
		url: currencyURL,
		dataType: 'json',
		data: JSON,
		success: changeValues
	});
	if ($val == 'USD') {
		currSymbol = '&#36;';
	} else if ($val == 'EUR') {
		currSymbol = '&euro;';
	} else if ($val == 'GBP') {
		currSymbol = '&pound;';
	} else {
		currSymbol = '&#x584;';
	}
	function changeValues(data) {
		
		var ethPrice = document.getElementById('price-' + typeCoin);
		
		ethPrice.innerHTML=currSymbol + data.last;
		var viewType;
		var chbox = document.getElementById('switch-' + typeCoin);
		chboxCond = $(chbox).prop("checked");
		var percentIcon;
		if (chboxCond == false) {
			viewType = data.changes.price;
			percentIcon = currSymbol;
		
		} else {
			viewType = data.changes.percent;
			percentIcon = '%';
	
		}
		var valueInst;
		if (viewType.hour > 0) {
			valueInst = '';
		} else {
			valueInst = 'down';
		}
		var ethPrice = document.getElementById('hour-' + typeCoin + valueInst);
		ethPrice.innerHTML=viewType.hour + percentIcon;
		if (viewType.day > 0) {
			valueInst = '';
		} else {
			valueInst = 'down';
		}
		var ethPrice = document.getElementById('day-' + typeCoin + valueInst);
		ethPrice.innerHTML=viewType.day + percentIcon;
		if (viewType.week > 0) {
			valueInst = '';
		} else {
			valueInst = 'down';
		}
		var ethPrice = document.getElementById('week-' + typeCoin + valueInst);
		ethPrice.innerHTML=viewType.week + percentIcon;
		if (viewType.month > 0) {
			valueInst = '';
		} else {
			valueInst = 'down';
		}
		var ethPrice = document.getElementById('month-' + typeCoin + valueInst);
		ethPrice.innerHTML=viewType.month + percentIcon;
		}
	
	 
		
}




function changeTypeView($changeTypeOfView) {
	var presentCurrencyChanger = document.getElementById('currency');
	var currValue = presentCurrencyChanger.getAttribute('value');
	getData($changeTypeOfView, currValue);
}



function newCurrency($data) {

	var presentCurrency = document.getElementById('currency');
	var showSelectCur = document.getElementsByClassName('currency-selector');
	var hiddenSelectCur = document.getElementById($data + 'curr');
	
	presentCurrency.innerHTML=$data;
	presentCurrency.setAttribute('value', $data);

	for (i=0;i<4;i++) {
		showSelectCur[i].setAttribute('style', 'display: block');
	}

	hiddenSelectCur.setAttribute('style', 'display: none');


		
	getData('BTC', $data);
	getData('ETH', $data);
	getData('LTC', $data);

}

newCurrency('USD');
