// routes.js


module.exports = function(app,xml,json,csv){
    //Default Route
    app.get('/', function(req,res){
        res.render('home.ejs');
    });

    //Route called to parse XML
    app.post('/parseXML', function(req, res){
        console.log(req.body);
        //xml.checkXML(req.data);
        
    });

    //Route called to parse JSON
    app.post('/parseJSON', function (req, res) {

    });

    //Route called to parse CSV
    app.post('/parseCSV', function (req, res) {

    });

}