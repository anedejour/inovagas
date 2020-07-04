$(document).ready(function() {
	$('.mascaraTelefone').mask('(99) 99999-9999');
	$('.mascaraCep').mask('99999-999');
	$('.mascaraCpf').mask('999.999.999-99');
	$('.mascaraCnh').mask('99999999999');
	$('.mascaraPlaca').mask ('AAA-9999');
	$('.dinheiro').mask('#.##0,00', {reverse: true});
	$('.numeroCartao').mask('9999 9999 9999 9999');
	$('.data').mask ('99/99/9999');
	$('.senha').mask ('************');
	$('.email').mask ('aaaa@aaaaaa.aaa')


	$('.mascaraCnh').change(function(){
		var value = $(this).val();
		console.log(value);
		console.log(value.length);
		if(value.length >1 || value.length< 10) {
			alert('O campo CNH deve conter 11 caracteres');
		}
	});
});