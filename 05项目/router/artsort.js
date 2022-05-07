const express=require('express')
const router=express.Router()

const {
    getArtSort,
    addSort,
    deleteSort,
    getSortById,
    updateSort,
}=require('../router_handler/artsort')
const {
    artsort_add_schema,
    id_required_schema,
    artsort_update_schema,
}=require('../schema/article')
const expressJoi=require('../utils/expressJoi')

// 文章类别
router.get('/getsorts',getArtSort)
router.post('/addsort',expressJoi(artsort_add_schema),addSort)
router.get('/deletesort/:id',expressJoi(id_required_schema),deleteSort)
router.get('/getsortdetail/:id',expressJoi(id_required_schema),getSortById)
router.post('/updatesort',expressJoi(artsort_update_schema),updateSort)



module.exports=router