
$(document).ready(function(){
    generateImageGallery();
});


function getImagesData() {

    var arr = [
        {
            name: 'F14',
            url: 'images/A (1).jpg'
        },
        {
            name: 'F15',
            url: 'images/A (2).jpg'
        },
        {
            name: 'F16',
            url: 'images/A (3).jpg'
        },
        {
            name: 'F18',
            url: 'images/A (4).jpg'
        },
        {
            name: 'F22',
            url: 'images/A (5).jpg'
        },
        {
            name: 'F22',
            url: 'images/A (6).jpg'
        },
        {
            name: 'F22',
            url: 'images/A (7).jpg'
        },
        {
            name: 'F22',
            url: 'images/A (8).jpg'
        },
        {
            name: 'F22',
            url: 'images/A (9).jpg'
        },
        {
            name: 'F22',
            url: 'images/A (10).jpg'
		}
	];

    return arr;

}

function generateImageGallery() {

    var data = getImagesData();

    data.forEach(function (item) {
        generateSImageBox(item.url);
    });
/*
    $( "#divSImages" ).sortable({
        revert: true
    });
*/
}

function generateSImageBox(path) {

    $('#divSImages').append($('<a class="box"><img style="height :80px;" src="' + path + '" /></a>'));

}

