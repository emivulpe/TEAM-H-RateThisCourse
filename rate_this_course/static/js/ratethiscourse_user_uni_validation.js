$("#id_university").ready(asyncGetUniAndBlock);

$("form").submit(function(){
    $("#id_university").prop('disabled', false);
});