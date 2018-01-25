console.log('ready');

// $.ajax({
//     url: "http://catfacts-api.appspot.com/api/facts",
//     dataType: 'jsonp',
//     success: function(results){
//         JSON.stringify(results);
//     }
// });

$.ajax({
    url: "http://catfacts-api.appspot.com/api/facts",
    dataType: 'json',
    success: function(results){
        var title = results.facts[0];
        console.log(title);
    }
});