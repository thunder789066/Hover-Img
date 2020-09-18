function upDate(previewPic){
    /* changes url for background image of div w/ id = "image" to source file of preview image */
    var url = $(previewPic).attr('src');
    $("#image").css("background-image", "url(" + url + ")");

    /* changes text of div w/ id = "image" to alt text of preview image */
    var txt = $(previewPic).attr('alt');
    $('#image').text(txt);
}

function unDo(previewPic){
    /* updates url for background image of div w/ id="image" back to default */
    var url = $(previewPic).attr('src');
    $("#image").css("background-image", "url(" + "" + ")");

    /* changes text of the div with the id="image" back to default */
    var txt = $(previewPic).attr('alt');
    $('#image').text("Hover over an image below to display here.");
}