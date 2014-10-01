var ncbi = require('bionode-ncbi');
var cy = require('cytoscape');

ncbi.search('gene', 'brca1 AND species[human]').on('data', console.log);


