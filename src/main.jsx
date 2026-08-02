import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./fscreens/nav/App";
import Home from "./fscreens/nav/Home";
import Admission from "./fscreens/nav/Admission";
import Sport from "./fscreens/nav/Sport";
import Teaching from "./fscreens/nav/Teaching";
import Bulletin from "./fscreens/nav/Bulletin";

import Finance from './fscreens/internal/Finance.jsx'
import Library from "./fscreens/internal/Library.jsx";
import About from "./fscreens/internal/About.jsx";
import Apply from "./fscreens/internal/Apply.jsx";
import Alumni from "./fscreens/internal/Alumni.jsx";
import Partnership from "./fscreens/internal/Partnership.jsx";
import Login from './fscreens/nav/Login.jsx'
import Smain from "./bscreens/student/Smain.jsx";
import Spay from "./bscreens/student/Spay.jsx";
import Smaterial from "./bscreens/student/Smaterial.jsx";
import Sprofile from "./bscreens/student/Sprofile.jsx";
import Sresult from "./bscreens/student/Sresult.jsx";

import Mdash from "./bscreens/mgt/Mdash.jsx";
import Mmain from "./bscreens/mgt/Mmain.jsx";

import Sdash from "./bscreens/student/Sdash.jsx";

import Tdash from "./bscreens/teacher/Tdash.jsx";
import Adash from "./bscreens/auditor/Adash.jsx";
import Bdash from "./bscreens/board/Bdash.jsx";
import Mregistro from "./bscreens/mgt/Mregistro.jsx";
import Register from "./bscreens/mgt/Register.jsx";
import MResult from "./bscreens/mgt/Mresult.jsx";
import Mupload from "./bscreens/mgt/Mupload.jsx";
import Menquires from "./bscreens/mgt/Menquires.jsx";
import Mfinance from "./bscreens/mgt/Mfinance.jsx";
import Mexpenses from "./bscreens/mgt/Mexpenses.jsx";
import EditUser from "./bscreens/mgt/EditUser.jsx";



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />}/>
        <Route path="/admission" element={<Admission />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/sport" element={<Sport />} />
        <Route path="/bulletin" element={<Bulletin />} />
      </Route>

      <Route path="finance" element={<Finance />}/>
      <Route path="/library" element={<Library />} />
      <Route path="/about" element={<About />}/>
      <Route path="/apply" element={<Apply/>}/>
      <Route path="/alumni" element={<Alumni/>}/>
      <Route path="/partner" element={<Partnership/>}/>

      <Route path="/login" element={<Login />}/>

      <Route path="/mdash" element={<Mdash />}>
        <Route index element={<Mmain/>}/>
        <Route path="/mdash/mresult" element={<MResult />}/>
        <Route path="/mdash/upload" element={<Mupload />}/>
        <Route path="/mdash/enquires" element={<Menquires />}/>
        <Route path="/mdash/registry" element={<Mregistro/>}/> 
        <Route path="/mdash/finance" element={<Mfinance/>}/>
        <Route path="/mdash/expenses" element={<Mexpenses />}/>
        <Route path="/mdash/registry/register" element={<Register />}/>
        <Route path="/mdash/registry/edit/:mId/:nId" element={<EditUser />}/>
      </Route>

      <Route path="sdash" element={<Sdash />}>
        <Route index element={<Smain/>}/>
        <Route path="/sdash/pay" element={<Spay/>}/>
        <Route path="/sdash/material" element={<Smaterial/>}/>
        <Route path="/sdash/result" element={<Sresult/>}/>
        <Route path="/sdash/profile" element={<Sprofile/>}/>
      </Route>

      <Route path="/tdash" element={<Tdash />}/>

      <Route path="/adash" element={<Adash />} />

      <Route path="/bdash" element={<Bdash />} />
      

    </Routes>
  </BrowserRouter>
)
