import React from 'react';
import {Route, Routes } from 'react-router-dom'
// import { connect } from 'react-redux'

// import pages
import HomePage from './pages/home/home';
// import Login from './pages/login/login';
// import Patner from './pages/patner/patner';
// import Register from './pages/register/register';
// import Sylabus from './pages/sylabus/sylabus';

class App extends React.Component {

  render() {
    return (
      <div style={{ backgroundColor: '#A3DDCB' }}>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage/>} exact />
            {/* <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/sylabus" element={<Sylabus/>} />
            <Route path="/patner" element={<Patner/>} /> */}
            {/* <Route path="*" element={NotFound} /> */}
          </Route>
        </Routes>
      </div>
      // <div>hallo</div>
    )
  }
}

export default App;