//sc: ....
function myDrawChart(votingPoolJSON) {
    //object json
    let objJsonChart = votingPoolJSON;
    //console.log("the hell 2..." + objJsonChart[0].meaning);
    // Load the Visualization API and the corechart package.
    google.charts.load('current', { 'packages': ['corechart'] });

    // Set a callback to run when the Google Visualization API is loaded.
    google.charts.setOnLoadCallback(drawChart);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {

        // Create data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');

        //for (let k = 0; k < objJson.length; k++) {
        //
        data.addRows([
            [objJsonChart[0].symbol + "-" + objJsonChart[0].meaning, objJsonChart[0].fav_votes],
            [objJsonChart[1].symbol + "-" + objJsonChart[1].meaning, objJsonChart[1].fav_votes],
            [objJsonChart[2].symbol + "-" + objJsonChart[2].meaning, objJsonChart[2].fav_votes],
            [objJsonChart[3].symbol + "-" + objJsonChart[3].meaning, objJsonChart[3].fav_votes],
            [objJsonChart[4].symbol + "-" + objJsonChart[4].meaning, objJsonChart[4].fav_votes]
        ]);
        // Set chart options
        var options = {
            //'title': 'hello',
            'width': 400,
            'height': 300
        };

        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
        chart.draw(data, options);
    }
}
