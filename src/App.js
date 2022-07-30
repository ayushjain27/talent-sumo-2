import './App.css';
import React, { useState } from 'react';
import Navbar from './Components/Navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Create from './Components/CreateInterview/Create';
import Access from './Components/AccessInterview/Access';
import Notification from './Components/InterviewNotification/Notification';
import Dashboard from './Components/Dashboard/Dashboard';
import Interaction from './Components/Interaction/Interaction';
import ForgetPassword from './Components/ForgetPassword/ForgetPassword';
import Report from './Components/Report/Report';
import LeaderboardReport from './Components/LeaderboardReport/LeaderboardReport';
import Form from './Components/StudentInteractionForm/Form';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Alert from './Components/Alert/Alert';
import ViewReports from './Components/ViewReports/ViewReports';
// import Certificate from './Components/Certificate/Certificate';

function App() {

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type, Message) => {
    setAlert({
      msg: message,
      type: type,
      msgg: Message
    });
  }

  return (
    <>
      <Router>
        <Navbar />
        <Alert alert={alert} />
        {/* <Certificate /> */}
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/create' element={<Create />} />
          <Route exact path='/access' element={<Access />} />
          <Route exact path='/notification&message' element={<Notification showAlert={showAlert} />} />
          <Route exact path='/interaction' element={<Interaction />} />
          <Route exact path="/report" element={<Report />} />
          <Route exact path="/leaderboardReport" element={<LeaderboardReport />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/resetPassword' element={<ForgetPassword />} />
          <Route exact path='/form' element={<Form />} />
          <Route exact path='/register' element={<SignUp />} />
          <Route exact path='/viewReport' element={<ViewReports />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
