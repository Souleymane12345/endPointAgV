var { db } = require("../util/admin");
var invDb = db.collection('enquêteClient');


const inv = async (req, res) => {
    
    try{
            invDb.get().then((snapshot) => {
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



const invId = async (req, res) => {
   
    try {
        
        var document = invDb.doc(req.params.id);
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


const invUp = async (req, res) => {
    try {
        var document = invDb.doc(req.params.id);
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


const invPo = async (req, res) => {
   
    try{
        //const data = await invDb.get()
        const data = req.body;
        console.log(data);
        await invDb.add({ data });;
        
        return res.status(201).json(data);

    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

const invDel = async (req, res) => {
    try {
        const document = invDb.doc(req.params.id);
        await document.delete();
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    

};


module.exports = {
    inv,
    invId,
    invUp,
    invPo,
    invDel,
    
}