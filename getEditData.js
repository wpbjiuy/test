var data = [
	{a:1,ars:[{c:1,n:'a'},{c:2,n:'b'}]},
	{a:2,ars:[{c:3,n:'a'},{c:4,n:'b'}]}
]

var pd = ['1','ars','1','c']
var v = 100

function szData(data, pd, v){
	var rsl = data.constructor();
	var sd = rsl;
	var _d = data;
	for (var i = 0; i < pd.length; i++) {
		var p = pd[i];
		if(i == pd.length -1){ 
			sd[p] = v;
			break;
		}
		sd[p] = _d[p].constructor();
		sd = sd[p];
		_d = _d[p];
	}

	return rsl;
}

var fd = szData(data, pd, v);
console.log(fd)