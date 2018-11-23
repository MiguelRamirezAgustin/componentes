
var datePicker=Ti.UI.createPicker({
	type: Ti.UI.PICKER_TYPE_DATE,
	minDate: new Date(1900, 1,1),
	maxDate: new Date(2020, 1,1),
	value: new Date()
});

var dateupdate=false;

var calendario=Ti.UI.createImageView({
	top:"10%",
	width:"13%",
	height:"8%",
	image:"/images/calendar.png"
});
$.viewCalendario.add(calendario);


var dateValue= Ti.UI.createLabel({
	color:"black",
	top:"15%",
	font:{
		fontSize:20
	}
});
$.viewCalendario.add(dateValue);

var texfiel=Ti.UI.createTextField({
	width:"50%",
	height:"8%",
	color:"red",
	top:"15%",
	borderColor:"blue",
	borderRadius:5,
	font:{
		fontSize:15
	}
});
$.viewCalendario.add(texfiel);


calendario.addEventListener('click', function(){
	datePicker.showDatePickerDialog({
		value: new Date(),
		callback: function(e){
			if(e.cancel){
				
			}else{
				dateValue.value=e.value;
				dateValue.text=(e.value.getMonth() + 1) + "/" + e.value.getDate() + "/" + e.value.getFullYear(),
				dateupdate=true;
				texfiel.value=e.value;
				texfiel.getValue=(e.value.getMonth() + 1) + "/" + e.value.getDate() + "/" + e.value.getFullYear();
				dateupdate=true;
			}
		}
	});
});

$.index.open();



 
