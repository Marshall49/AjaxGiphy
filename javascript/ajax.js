
$( document ).ready(function() {

var hiphop = ["Outkast", "Anderson Paak", "Kendrick Lamar", "J Cole", "Schoolboy Q", "Ludacris", "T.I.", "Drake", "Lil Wayne"]


function displayArtistButtons(){
    $("#buttons-view").empty();
    for (var i = 0; i < hiphop.length;i++){

        var artistButton = $("<button>");
        artistButton.addClass("hiphop");
        artistButton.addClass("btn btn-primary")
        artistButton.attr("data-name", hiphop[i]);
        artistButton.text(hiphop[i]);
        $("#buttons-view").append(artistButton);
    }
  }

    $("#add-artist").on("click", function(event){
      event.preventDefault();
    var hiphops = $("#artists-input").val().trim();
    if (hiphops == ""){
      return false;
    }
    else {

    hiphop.push(hiphops);



    // displayArtistButtons();
  }
    });
      displayArtistButtons();

    $(".hiphop").on('click', function(){
      console.log("yea")
      var hiphop = $(this).attr("data-name");
      var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + hiphop + "&api_key=dc6zaTOxFJmzC&limit=10";
      console.log(queryURL);
      // $.ajax({
      //     url: queryURL,
      //     method: 'GET'
      // })
      // .done(function(response) {
      //     // console.log(response)
      //     $("#buttons-view").empty();
      //       var results = response.data;
      //
      //
      //     for (var i=0; i<results.length; i++){
      //
      //     var artistDiv = $("<div>")
      //     artistDiv.addclass ("artistDiv");
      //     var artistRating = $("<p>").text("Rating: " + results[i].rating);
      //       artistDiv.append(artistRating);
      //
      //     var artistImage = $("<img>");
      //       // artistImage.attr("src", results[i].)
      //       artistImage.attr("data-animate")
      //       artistImage.attr("data-still")

    })



//
// function removeLastArtist(){
//     $("removeGif").on("click", function(){
//     hiphop.pop(hiphops);
//     displayGifButtons();
//     return false;
//     });


// function displayArtist(){
//   console.log("")
//     var hiphop = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + hiphop + "&api_key=dc6zaTOxFJmzC&limit=10";
//     console.log(queryURL);
//     $.ajax({
//         url: queryURL,
//         method: 'GET'
//     })
//     .done(function(response) {
//         // console.log(response)
//         $("#buttons-view").empty();
//           var results = response.data;
//
//
//         for (var i=0; i<results.length; i++){
//
//         var artistDiv = $("<div>")
//         artistDiv.addclass ("artistDiv");
//         var artistRating = $("<p>").text("Rating: " + results[i].rating);
//           artistDiv.append(artistRating);
//
//         var artistImage = $("<img>");
//           // artistImage.attr("src", results[i].)
//           artistImage.attr("data-animate")
//           artistImage.attr("data-still")
//

    //     }
    //   })
    // }








    $(".add-artist").on("click", function() {

      var hiphop = $(this).attr("data-state");
      if (hiphop === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
      } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
      }
    });
})
