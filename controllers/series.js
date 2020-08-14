const Serie = require('../models/series.js');


function createSerie(req,res){
    const newSerie = new Serie(req.body);
    newSerie.save((err,result)=>{
    if (err){
        return res.send({error: err.toString()});
    }
        return res.send(result);
    })
}

function indexSerie(req,res){
    Serie.find((err,result)=>{
        if(result.length){
            return res.send(result);
        }
        return res.send({error: err.toString()});
    })
}
function updateSerie(req,res){

}
function showSerie(req,res){

}
function deleteSerie(req,res){

}

module.exports.createSerie = createSerie;
module.exports.indexSerie = indexSerie;
module.exports.deleteSerie = deleteSerie;
module.exports.updateSerie = updateSerie;
module.exports.showSerie = showSerie;

