var a = {d:2, r:{q:2}, c:1}
var b = {c:1,d:2 , r:{q:1}}
function equal() {
	obj1Len = 0;
	obj2Len = 0;
	for (i in this[0]){
		obj1Len++;
	}
	for (i in this[1]){
		obj2Len++;
	}
	var isEqual = true;
	if (obj1Len == obj2Len){
		for (key in this[0]){
			if (typeof this[0].valueOf()[key.toString()] != "object"){
				if (this[0].valueOf()[key.toString()] !== this[1].valueOf()[key.toString()]){
					return false;
				}
			}else{
				isEqual = equal.apply([this[0].valueOf()[key.toString()],this[1].valueOf()[key.toString()]])
			}
		}
		return isEqual;
	}else{
		return false;
	}
}
alert(equal.apply([a,b]));