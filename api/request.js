var { db } = require("../util/admin");
var rdb = db.collection('DemandeIdent');
var idb = db.collection('DemandeIdent');

/**         Remplacement de carte la SIM    */
const rSim = async (req, res) => {
    
    try{
        rdb.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .send(error);         
    }
}

const rSimId = async (req, res) => {
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

/**         Identification de la carte SIM    */

const identSim = async (req, res) => {s
    try{
        idb.get().then((snapshot) => {
            const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            console.log(data);
            return res.status(201).json(data);
        })
    } catch (error) {
        return res
        .status(500)
        .send(error);          
    }
}

const identSimId = async (req, res) => {
    try {
        let document = idb.doc(req.params.item_id);
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

module.export = {
    rSim,
    rSimId,
    identSim,
    identSimId,
}

