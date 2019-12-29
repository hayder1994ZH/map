//                  select cards code
$(document).ready(function () {

    var getItems = function () {
        $.ajax({
            url: "getItems.php",
            method: "post",
            dataType: "json",
            data: {},
            success: function (res) {
                if (res.state == "There is no data") {
                    console.log('put notify there is no data');
                }
                if (res.state == "success") { // if success
                    var html = "";
                    $('#cards-container').html('');
                    for (var x of res.data) { // for loop select data

                        html += `<div class="col s2">
                            <div class="card">
                                <div class="card-image" data-id="${x.id}">
                                    <img src="img/black.jpg" width="200" height="200" style="border-bottom: 2px solid #b39e9e;">
                                </div>
                                <div class="card-content">
                                    <p style="text-align: right;">${x.name_prodect}</p>
                                </div>
                                <div class="card-action" style="text-align: right;">
                                    ${x.price}
                                </div>
                            </div>
                        </div>`;
                    } // End for loop select data
                    $('#cards-container').html(html);
                } //   End if success
            },
            error: function (e) {
                console.log('error e=', e);
            }
        }); //ajax 
    };
    //                 End select cards code
    getItems(); // call function select

    $('#cards-container').on('click', '.card-image', function (e) {
        console.log('card image clicked');
        console.log('e= ', e);
        var $currentTarget = $(e.currentTarget);

        console.log('$currentTarget= ', $currentTarget);
        var id = $currentTarget.data('id');
        console.log('id= ', id);
        location.href = "detalse.html?id=" + id;
    });

    //  Insert New Item
    $('#btnAdd').click(function (e) {
        e.preventDefault();
        var nameProdect = $("#nameProdect").val();
        var price = $("#price").val();
        var latitude = $("#latitude").val();
        var longitude = $("#longitude").val();
        if (nameProdect == '') {
            $('#notify').css("opacity", "1");
            $('#notify').text("قم بكتابة اسم المنتج");
        } else {
            if (price == '') {
                $('#notify').css("opacity", "1");
                $('#notify').text("قم بكتابة سعر المنتج");
            } else {
                if (latitude == '' && latitude == '') {
                    $('#notify').css("opacity", "1");
                    $('#notify').text("قم بكتابة اسم المنطقة");
                } else {
                    var formData = new FormData();
                    formData.append("nameProdect", nameProdect);
                    formData.append("price", price);
                    formData.append("latitude", latitude);
                    formData.append("longitude", longitude);

                    $.ajax({
                        url: "addItem.php",
                        type: 'post',
                        dataType: "json",
                        cache: false,
                        contentType: false,
                        processData: false,
                        data: formData,
                        complete: function () {
                            console.log('complete');
                        },
                        success: function (res) {
                            if (res.itemId > 0) {
                                console.log('success itemId > 0');
                                $('#btnAdd').attr('disabled', 'disabled');
                                $('#btnAdd').css("opacity", "0.6");
                                $('#notify').css("opacity", "1");
                                $('#notify').text("تم اضافة المنتج");
                                getItems();
                            } else {
                                console.log('failed');
                            }
                        }, //success
                        error: function (e) {
                            console.log('error e=', e);
                        }
                    }); //ajax 
                }
            }
        }

    });
    // End Insert New Item

});

//  click btn to show form
$("#addItem").click(function () {
    $(".form").css("display", "block");
    $(".opas").css("display", "block");
});
// End  click btn to show form

//  click Div to show form
$(".opas").click(function () {
    $(".form").css("display", "none");
    $(".opas").css("display", "none");
    location.reload();
});
//  End click Div to show form