
// CK Editor Section
let textAreaEl = document.getElementById("textArea");

let em_string = "";

CKEDITOR.replace( 'editor1' );

let contentOutput = CKEDITOR.on( 'instanceReady', function( evt )
{
    var editor = evt.editor;

editor.on('change', function (e) {  
    var text =  editor.editable().getData();
    em_string = text;
    
    textAreaEl.innerHTML = em_string;
    
    });
}); ;