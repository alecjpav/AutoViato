// https://static.filestackapi.com/v3/filestack.js?key=AuPt8CYJQGS1kGO8wkHGdz=image
function addimage_onclick(num) {
    event.preventDefault();


    const link = document.getElementById('url');

    const client = filestack.init('AuPt8CYJQGS1kGO8wkHGdz');

    client.pick({
        accept: 'image/*',
    }).then(function(result) {
        const fileUrl = result.filesUploaded[0].url;
        $("#image-" + num).replaceWith("<img src=" + fileUrl + " height=200 width=200 class=img-fluid>");
        link.href = fileUrl;
        link.innerHTML = fileUrl;
    });


}

function cancel_onclick() {
    window.location.href = "https://alecjpav.github.io/AutoViato/index.html";
}

function confirm_onclick() {
    window.location.href = "https://alecjpav.github.io/AutoViato/confirmation-sender.html";
}