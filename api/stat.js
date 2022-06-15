var { db } = require("../util/admin");

//var statDb = db.collection('');


const statFil = async (req, res) => {
     
    try {
        const filters = req.query;
        statDb.get().then((snapshot) => {
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
    statFil,
}