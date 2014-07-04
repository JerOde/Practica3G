//JavaScript
	
$(document).ready(function(e){
	var TuNombre;
	var Dia;
	var Mes;
	var Anio;
	var Edad;
$('#ContinuarFecha').click(function(e){
	
	TuNombre=$('#Nombre').val();
	alert(TuNombre);
	
});// click continuar fecha
    
$('#ContinuarResultado').click(function(e){
	
	
	Dia=$('#Dia').val();
	alert(Dia + ' dia');
	Mes=$('#Mes').val();
	alert(Mes + ' mes');
	Anio=$('#Anio').val();
	alert(Anio + ' anio');
	//$('#quien').text(TuNombre);
    
    var Fecha= new Date();
	alert (Fecha);
	
alert(Fecha.getFullYear() + ' Anio');
alert(Fecha.getMonth()+1  + ' Mes');
alert(Fecha.getDate()  + ' Dia');

var mifecha = new Date( Fecha.getFullYear() + '/' + Mes + '/' + Dia);
var fechaactual = new Date( Fecha.getFullYear() + '/' + (Fecha.getMonth()+1) + '/' +  Fecha.getDate());
/*var diasfaltantes = (((((mifecha - fechaactual)/1000)/60)/60)/24);
alert(diasfaltantes);*/

Edad= Fecha.getFullYear() - Anio
//start-------------------------------------------------------------------

if (mifecha.getMonth() >= fechaactual.getMonth())

 {
    //start1------------------------------------------------------------------+
	if (mifecha.getMonth() == fechaactual.getMonth()) 
	{
        //start2------------------------------------------------------------------++
		if (mifecha.getDate() > fechaactual.getDate())
		{   
		    diasfaltantes = (((((mifecha - fechaactual)/1000)/60)/60)/24);
			Edad= Edad-1
		}	
		else//middle1------*
		{
			mifecha= new Date((mifecha.getFullYear()+1) +'/'+ Mes +'/'+ Dia);
			diasfaltantes = (((((mifecha - fechaactual)/1000)/60)/60)/24);	
			
		}
        //end2--------------------------------------------------------------------++
	}
	else//middle2------*
	{
		diasfaltantes = (((((mifecha - fechaactual)/1000)/60)/60)/24);
		Edad= Edad-1
	}
    //end1--------------------------------------------------------------------+
 }
 else//middle3------*
 {   
     mifecha= new Date((mifecha.getFullYear()+1) +'/'+ Mes +'/'+ Dia);
	 diasfaltantes = (((((mifecha - fechaactual)/1000)/60)/60)/24);
 }
 alert(diasfaltantes + '   Dias Restantes')
//end---------------------------------------------------------------------
 if (diasfaltantes <= 30)
 {
	$('#Pastel').show(); 
 }
 else
 {
	 $('#Pastel').hide();
 }
 $('#quien').text(TuNombre);
 $('#Edad').text('Tu edad es de  ' + Edad);
 $('#Allar').text('Faltan ' + diasfaltantes + ' dias para tu cumple');
 
});// click continuar Resultado
});//ready