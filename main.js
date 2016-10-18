$("xxx").on("click"), function(e) {
    var xxx = $("xxx").val();

}



$("button").on("click", function(e) {
            var search = $("#search").val();

            $.ajax({
                url: "http://api.soundcloud.com/tracks/?client_id=03e4633e2d85874a921380e47cac705d&q=${search}",
                success: function(result) {
                    console.log(result);
                    // Assign the data variable to an array that we will loop over.
                    // Clear out any previous data.
                    $("#search").html("");
                    // Put in the results

                    // Loop over our array to get access to each day.
                    result.forEach(function(track) {
                        // Get the icon url for this day
                        var iconUrl = `xxx`;

                        // Put the search results info into our page.
                        $("#searchResultsGoHere").append(`
		<div class="music col-md-4">
		<h3></h3>
		<img src="${track.artwork_url}">
		<h3>Song Title:<br>${track.title}</h3>
		</div>
		`)
                    })
                }
            });
        });

