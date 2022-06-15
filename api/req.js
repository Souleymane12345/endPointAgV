var { db } = require("../util/admin");
var rdb = db.collection('DemandeRempla');
var idb = db.collection('DemandeIdent');

const rempSim = async (req, res) => {
    
    try{
            rdb.get().then((snapshot) => {
            var data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

const rempSimId = async (req, res) => {
    try {
        const document = rdb.doc(req.params.id);
        let item = await document.get();
        let response = item.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .send(error);
    }
}

const identSim = async (req, res) => {
    
    try{
            idb.get().then((snapshot) => {
            var data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

const identSimId = async (req, res) => {
    try {
        const document = rdb.doc(req.params.id);
        let item = await document.get();
        let response = item.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .send(error);
    }
}


module.exports = {
    rempSim,
    rempSimId,
    identSim,
    identSimId,


    
}