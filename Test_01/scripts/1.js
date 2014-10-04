
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
        }
    ];

    return arr;

}

function generateImageGallery() {

    var data = getImagesData();

    data.forEach(function (item) {
        generateImageBox(item.url);
    });

	$( "#divSImages" ).sortable({
	revert: true
	});

}

function generateImageBox(path) {

    $('#divSImages').append($('<td class="box"><img style="height :80px;" src="' + path + '" /></td>'));

}

function generateImageBox(path) {

    $('#divLImages') .append($('<td class="box"><img style="height :80px;" src="' + path + '" /></td>'));

}

/*
function changeColor() {
    $('.part').css('border-color', 'blue');
}

*/
