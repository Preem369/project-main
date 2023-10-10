import React from "react";
import Navbar1 from "./NavBar1";
import FilterAltSharpIcon from '@mui/icons-material/FilterAltSharp';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import Axios from "axios";
function Main12(){
    const [profile, setProfile] = useState([]);
    const [flag, setflag] = useState(false);
    useEffect(() => {
        // ตรวจสอบว่ามีข้อมูลใน /user หรือไม่
        Axios.get("http://localhost:5000/user/:email")
        .then((response) => {
          console.log("ข้อมูลที่ได้รับ:", response.data);
          const userEmails = response.data.map((user) => user.email);
          if (userEmails.includes(profile.email)) {
            setflag(true);
          } else {
            alert("ไม่พบข้อมูลผู้ใช้");
          }
        })
        .catch((error) => {
          console.error("เกิดข้อผิดพลาดในการตรวจสอบข้อมูลผู้ใช้:", error);
        });
      }, []);
    return (
        <div>

            <Navbar1/>
            <div style={{display:'flex',margin:20,justifyContent:'space-between'}}>
            <FilterAltSharpIcon fontSize='large' color='info'  />
            <Button variant='contained' sx={{borderRadius:20,backgroundColor:'#D62828',color: 'white'}}>สร้างธนาคาร</Button></div>
        </div>
    );
}
export default Main12;