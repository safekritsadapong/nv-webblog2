module.exports = {

//get all user
index (req, res) {
    res.send('เรียกข้อมูล ผู้ใช้งานทั้งหมด')
},
//create user
crate (req, res) {
    res.send('สร้างผู้ใช้' + JSON.stringify(req.body))
},
//edit user
put(req,res){ 
    res.send(' แก้ไขข้อมูลผู้ใช้ ' + req.params.userId + JSON.stringify(req.body))
},
//delete user
delete(req,res){ 
    res.send(' ลบผู้ใช้งาน ' + req.params.userId + JSON.stringify(req.body))
},
// get user by id
show(req,res){ 
    res.send(' ดูผู้ใช้งานทั้งหมด ' + req.params.userId + JSON.stringify(req.body))
 }

}

