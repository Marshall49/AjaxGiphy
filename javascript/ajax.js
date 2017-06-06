
$( document ).ready(function() {

var hiphop = ["Outkast", "Anderson Paak", "Kendrick Lamar", "J Cole", "Schoolboy Q", "Ludacris", "T.I.", "Drake", "Lil Wayne"]


function displayArtistButtons(){
    $("#col1").empty();
        var gifButton = $("<button>");
        gifButton.addClass("hiphop");
        gifButton.addClass("btn btn-primary")
        gifButton.attr("data-name", hiphop[i]);
        gifButton.text(hiphop[i]);
        $("#col1").append(gifButton);
    }
})

function addNewArtist(){
    $("#add-artist").on("click", function(){
    var hiphops = $("#artists-input").val().trim();
    if (hiphops == ""){
      return false;
    }
    hiphop.push(action);

    displayArtistButtons();
    return false;
    });
}

//
// function removeLastArtist(){
//     $("removeGif").on("click", function(){
//     hiphop.pop(hiphops);
//     displayGifButtons();
//     return false;
//     });


function displayArtist(){
    var hiphop = $(this).attr("data-name");
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + hiphop + "&api_key=dc6zaTOxFJmzC&limit=10";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: 'GET'
    })
    .done(function(response) {
        // console.log(response)
        $("#col1").empty();
          var results = response.....;
        })

        for (var i=0; i<results.length; i++){
        }
      }





    // $(".gif").on("click", function() {
    //
    //   var state = $(this).attr("data-state");
    //   if (state === "still") {
    //     $(this).attr("src", $(this).attr("data-animate"));
    //     $(this).attr("data-state", "animate");
    //   } else {
    //     $(this).attr("src", $(this).attr("data-still"));
    //     $(this).attr("data-state", "still");
    //   }
    // });
