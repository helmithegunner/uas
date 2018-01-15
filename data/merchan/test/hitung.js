function hitung(){
	var myForm = document.kalkulator;
	var x=eval(myForm.x.value);
	var y=eval(myForm.y.value);
	var pil= myForm.opt.value;
	//Pengkondisian operator
	if (pil == "kali") {
		var z = x * y;
		 }else if (pil == "kurang") {
		var z = x * y;
	}
	//Cetak hasil pada element form
	 myForm.hasil.value = z;
	//Bersihkan Nilai input
	 myForm.x.value = "";
	 myForm.y.value = "";
}

function resetForm(){
	document.kalkulator.reset();
}