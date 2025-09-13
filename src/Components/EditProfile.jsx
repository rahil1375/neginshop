import React, { useState } from "react";
function EditProfile(){

    return(
        <div className="" style={{width:"100%",backgroundColor:"coral",paddingTop:"23vh",paddingBottom:"3vh",direction:"rtl",display:"flex",justifyContent:"center"}}>
          <form className="content" style={{width:"96%",borderRadius:"20px",backgroundColor:"#ffff",display:"flex",flexWrap:"wrap",flexDirection:"row",justifyContent:"flex-start"}}>
               <p>نام : <input type="textbox"></input></p>
                <p>ایمیل : <input type="textbox"></input></p>
                <p>پسورد : <input type="textbox"></input></p>
                
                <p>نقش کاربر : <select name="role">
                    <option value="user">کاربر ساده</option>
                    <option value="admin">ادمین</option>
                </select></p>
                <input type="file" accept="image/*" />

                <button type="submit" style={{width:"fit-content",height:"fit-content"}}>ذخیره تغییرات</button>
          </form>
        </div>
    )
}

export default EditProfile