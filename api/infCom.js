var { db } = require("../util/admin");
//var infDb = db.collection('...');


const infCom = async (req, res) => {
    
    try{
            infDb.get().then((snapshot) => {
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



const infComId = async (req, res) => {
   
    try {
        
        var document = infDb.doc(req.params.id);
        let item = await document.get();
        let response = item.data();
        return res.status(200).send(response);
    } catch (error) {
        console.log(error);
        return res
        .status(500)
        .send(error);
    }
};


const infComUp = async (req, res) => {
    try {
        var document = infDb.doc(req.params.id);
        const data = req.body;
        //console.log(document)
        console.log(data)
        await document.update(data);
             
            //descrption: req.body.descrption
        
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }  
};


const infComPo = async (req, res) => {
   
    try{
        //const data = await infDb.get()
        const data = req.body;
        console.log(data);
        await infDb.add({ data });;
        
        return res.status(201).json(data);

    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

const infComDel = async (req, res) => {
    try {
        const document = infDb.doc(req.params.id);
        await document.delete();
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    

};


module.exports = {
    infCom,
    infComId,
    infComUp,
    infComPo,
    infComDel,
    
}