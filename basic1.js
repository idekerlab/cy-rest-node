var ncbi = require('bionode-ncbi');
var cy = require('cytoscape');
var _ = require('underscore');


var query = 'brca1[Gene/Protein Name] AND "Homo sapiens"[Organism] AND alive[property]';
var resultArray = [];

var filterResults = function(resultList) {
  _.each(resultList, function(res) {
    console.log(res.uid + ' = ' + res.name);
  });
}


// Run the workflow:
ncbi.search('gene', query)
  .on('data', function (data) {
    resultArray.push(data);
  })
  .on('end', function() {
    console.log('Number of hits = ' + resultArray.length);
    filterResults(resultArray);
  });



