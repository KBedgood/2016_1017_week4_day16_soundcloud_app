$("button").on("click", function(e) {
var search = $("#search").val();
writeData(search);



$.ajax({
data: { search: search },
url: "https://api.soundcloud.com 03e4633e2d85874a921380e47cac705d",
success: function(result) {
// Assign the data variable to an array that we will loop over.
var data = result.list;
// Clear out any previous data.
$("#search").html("");
// Put in the results
$("#searchResultsGoHere").text(result.city.name);

// Loop over our array to get access to each day.
data.forEach(function(search) {
// Get the icon url for this day
var iconUrl = `xxx`;

// Put the search results info into our page.
$("#searchResultsGoHere").append(`
<div class="music col-md-3">
<h3>${ }</h3>
<h3>Song Title:${day.temp.max}</h3>
<h3>Artist:${day.temp.min}</h3>
<img src="${iconUrl}">
</div>
`)
})
}
});
}
