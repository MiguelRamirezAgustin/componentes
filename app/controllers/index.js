
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
	height:"12%",
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
	height:"15%",
	color:"red",
	top:"15%",
	borderColor:"blue",
	borderRadius:5,
	font:{
		fontSize:12
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

var loginView=Ti.UI.createView({
	layout:"vertical",
	width:"90%",
	height:"70%"
});

var txtUserName =Ti.UI.createTextField({
	hintText:'User Name',
	hintTextColor:"gray",
	top:"4%",
	width:Ti.UI.FILL,
	height:"10%",
	borderColor:"gray",
	color:"white",
	borderRadius:3,
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
});

var txtUserPassword =Ti.UI.createTextField({
	hintText:'password',
	hintTextColor:"gray",
	top:"4%",
	width:Ti.UI.FILL ,
	height:"10%",
	borderColor:"gray",
	color:"white",
	borderRadius:3,
	textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER
});

loginView.add(txtUserName);
loginView.add(txtUserPassword);


$.lbdialogo.addEventListener('dblclick', function(){
	var optiondialogo=Ti.UI.createOptionDialog({
	 title:"Login",
	 androidView:loginView,
	 buttonNames:['login','cancel']
	});
	optiondialogo.show();
});


$.lbSiguiente.addEventListener('click', function(){
	var siguiente=Alloy.createController('datos').getView();
	siguiente.open();
});

$.index.open();



 
