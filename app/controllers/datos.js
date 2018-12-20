// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;



setTimeout(function(e){
	var db= Ti.Database.open('informacion');
	db.execute('CREATE TABLE IF NOT EXISTS DOCUMENT ( name TEXT);');
	db.close();
	
	Ti.API.info('Descripcion--'+ db);
},2000);


var labeltitulo =Ti.UI.createLabel({
	 text:"Datos",
	 textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
	 color:"white",
	 font:{
	 	fontSize:15
	 }
});
$.superior.add(labeltitulo);


/*$.btnInsertar.addEventListener('click', function(){
	if($.txfNombre.value== ""){
		alert('El campo esta vacio');
	}else{
	var db=Ti.Database.open('informacion');
	db.execute('INSERT INTO  DOCUMENTS(name) VALUES(?)', $.txfNombre.getValue());
    db.close();
   }
}*/



