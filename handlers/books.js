
var { db } = require("../util/admin");
const ApiModel = require('../model/apiModel.js');
var booksRef = db.collection('Books');


const book = async (req, res) => {
    
    try{
            booksRef.get().then((snapshot) => {
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



const bookId = async (req, res) => {
   
    try {
        
        var document = booksRef.doc(req.params.id);
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


const bookUp = async (req, res) => {
    try {
        var document = booksRef.doc(req.params.id);
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


const bookPo = async (req, res) => {
   
    try{
        //const data = await booksRef.get()
        const data = req.body;
        console.log(data);
        await booksRef.add({ data });;
        
        return res.status(201).json(data);

    } catch (error) {
        return res
        .status(500)
        .json({ general: "Something went wrong, please try again"});          
    }
};

const bookDel = async (req, res) => {
    try {
        const document = booksRef.doc(req.params.id);
        await document.delete();
        return res.status(200).send();
    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    

};

const bookFil = async (req, res) => {
     
    try {
        const filters = req.query;
        booksRef.get().then((snapshot) => {
            var data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
            const filteredUsers = data.filter(user => {
                let isValid = true;
                let key
                for (key in filters) {
                    console.log(key, user[key], filters[key]);
                    isValid = isValid && user[key] == filters[key];
                }
                return isValid;
            });
            res.send(filteredUsers);

        })

        
        



    } catch (error) {
        console.log(error);
        return res.status(500).send(error);
    }
    

};


module.exports = {
    book,
    bookId,
    bookUp,
    bookPo,
    bookDel,
    bookFil,
}