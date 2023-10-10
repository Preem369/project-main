import React, { useState, useEffect } from "react";
import NavbarProfile from "./navBarprofile";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Axios from "axios";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [profile, setProfile] = useState({
    name: "",
    email: ""
  });
  const [flag, setFlag] = useState(false);
  const [tel, setTel] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // แทน email ด้วยค่า email ของผู้ใช้ที่คุณต้องการดึง
    const userEmail = "example@email.com";

    Axios.get(`http://localhost:5000/user/${userEmail}`)
      .then((response) => {
        console.log("ข้อมูลที่ได้รับ:", response.data);
        const userData = response.data;

        // กำหนดค่าให้กับ profile state
        setProfile({
          name: userData.fullname,
          email: userData.email,
        });
      })
      .catch((error) => {
        console.error("เกิดข้อผิดพลาดในการตรวจสอบข้อมูลผู้ใช้:", error);
      });
  }, []);

  const handleBack = () => {
    navigate("/main");
  }

  return (
    <div>
      <NavbarProfile />
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: 5,
        }}
        noValidate
        autoComplete="off"
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '50ch' }}>
          <TextField
            id="outlined-basic"
            label="ชื่อ-นามสกุลจริง"
            variant="outlined"
            sx={{ margin: 1 }}
            value={profile.name} // ใช้ value แทน defaultValue
          />

          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            sx={{ margin: 1 }}
            value={profile.email} // ใช้ value แทน defaultValue
          />

          <TextField
            id="outlined-basic"
            label="Tel"
            variant="outlined"
            sx={{ margin: 1 }}
            value={tel} // ใช้ค่าของ state tel
            onChange={(event) => setTel(event.target.value)} // อัปเดต state เมื่อมีการเปลี่ยนแปลง
          />

          {/* ในส่วนของเบอร์โทร คุณอาจต้องสร้าง state และใช้ value ใน TextField เช่นเดียวกัน */}
        </div>
      </Box>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: 10 }}>
        <Button variant="contained" color='error' sx={{ top: 300 }} onClick={handleBack}>ย้อนกลับ</Button>
        <Button variant="contained" color='success' sx={{ backgroundColor: '#07C27F', top: 300 }} onClick={handleBack}>เสร็จสิ้น</Button>
      </div>
    </div>
  );
}

export default Profile;