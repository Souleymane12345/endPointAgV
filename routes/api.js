var express = require('express');
var router = express.Router();

//var  books  = require('../handlers/books')
const {book, 
    bookId, 
    bookUp,
    bookPo,
    bookDel,
    bookFil,
   } = require('../handlers/books');

const {rempSim,
    rempSimId,
    identSim,
    identSimId} = require('../api/req')


const { infCom,
        infComId,
        infComUp,
        infComPo,
        infComDel,
       } = require('../api/infCom');

const { inv,
    invId,
    invUp,
    invPo,
    invDel,
       } = require('../api/invest');
const {statFil} = require('../api/stat')


router.get('/books/filter', bookFil);
router.get('/books', book);
router.post('/books/post', bookPo);
router.get('/books/:id', bookId);
router.put('/books/update/:id', bookUp);
router.delete('/books/delete/:id', bookDel);

/**   Routes des demandes */

/*** */
router.get('/rempSim', rempSim);
router.get('/rempSimId/:id', rempSimId);
router.get('/identSim', identSim);
router.get('/identSimId/:id', identSimId);

/**   Routes des informations comerciale */


/** */
router.get('/infCom', infCom);
router.post('/infCom/post', infComPo);
router.get('/infCom/:id', infComId);
router.put('/infCom/update/:id', infComUp);
router.delete('/infCom/delete/:id', infComDel);

/**   Routes des statisques */

/** */
router.get('/stat/filter', statFil);


/**   Routes des enquêtes */

/** */
router.get('/inv', inv);
router.post('/inv/post', invPo);
router.get('/inv/:id', invId);
router.put('/inv/update/:id', invUp);
router.delete('/inv/delete/:id', invDel);


module.exports = router;





















//router.post('/student', addStudent);
//router.delete('/student/:id', deleteStudent);

///////////////////////////////////////////////
/**

/***
var  apReq = require('../api/request')
var  apInv = require('../api/invest')
var  apInf = require('../api/infCom')
var  apStat = require('../api/stat')


  

router.route('/books')
    .get(books.book)


router.route('/books/:id')
    .get(books.bookId)

router.route('/books/update/:id')
    .put(books.bookUp)


router.get('/api', (req,res)=>{
    res.json({
      status: 'API disponible',
      message: 'Création de l\'api avec succès ',
      });
  })
 */
///////////////////////////////////////////////

/////////////////// Les demandes ///////////////////////
/***
router.route('/rSim')
    .get(apReq.rSim)

router.route('/rSim/:item_id')
    .get(apReq.rSimId)

router.route('/identSim')
    .get(apReq.identSim)

router.route('/identSim/:item_id')
    .get(apReq.identSimId)
 */
///////////////////////////////////////////////////////