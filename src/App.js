import AOS from 'aos';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom'
import { Component } from 'react';
import WelcomeModal from './Welcome.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<InvitationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

class InvitationPage extends Component {
  componentDidMount() {
    AOS.init();
  }

  render() {
    return (
      <div className='App' style={{float: 'left'}}>
        <title>Undangan Pernikahan Al dan Novi</title>
        <nav className='navbar bg-dark navbar-expand fixed-bottom rounded-top-4 p-0" id="navbar-menu'>
          <ul className="navbar-nav nav-justified w-100 align-items-center">
            <li className="nav-item">
                <a className="nav-link" href="#home">
                    <i className="fa-solid fa-house"></i>
                    <span className="d-block" style={{fontSize: 0.7 + "rem"}}>Home</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#mempelai">
                    <i className="fa-solid fa-user-group"></i>
                    <span className="d-block" style={{fontSize: 0.7 + "rem"}}>Mempelai</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#tanggal">
                    <i className="fa-solid fa-calendar-check"></i>
                    <span className="d-block" style={{fontSize: 0.7 + "rem"}}>Tanggal</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#galeri">
                    <i className="fa-solid fa-images"></i>
                    <span className="d-block" style={{fontSize: 0.7 + "rem"}}>Galeri</span>
                </a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#ucapan">
                    <i className="fa-solid fa-comments"></i>
                    <span className="d-block" style={{fontSize: 0.7 + "rem"}}>Ucapan</span>
                </a>
            </li>
          </ul>
        </nav>

        <main className='container bg-dark text-light' data-bs-spy="scroll" data-bs-target="#navbar-menu" data-bs-smooth-scroll="true">
          <section className='container' id='home'>
            <div className="text-center pt-4">
              <h1 className="font-esthetic my-4" style={{fontSize: 2.5+"rem"}}>Undangan Pernikahan</h1>

              <div className="py-4">
                <div className="img-crop border border-3 border-light shadow mx-auto">
                  <img width={150} height={150} src="" alt="bg" />
                </div>
              </div>

              <h1 className="font-esthetic my-4" style={{fontSize: 3+"rem"}}>Al & Novi</h1>
              <p className="mb-0" style={{fontSize: 1.5+"rem"}}>Minggu, 23 Juni 2024</p>

              <a className="btn btn-outline-light btn-sm shadow rounded-pill px-3 my-2" target="_blank" rel='noreferrer' href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=The%20Wedding%20of%20Wahyu%20and%20Riski&details=The%20Wedding%20of%20Wahyu%20and%20Riski%20%7C%2015%20Maret%202023%20%7C%20RT%2010%20RW%2002,%20Desa%20Pajerukan,%20Kec.%20Kalibagor,%20Kab.%20Banyumas,%20Jawa%20Tengah%2053191%20%7C%2010.00%20-%2011.00%20WIB&dates=20230315T100000/20230315T110000&location=https://goo.gl/maps/ALZR6FJZU3kxVwN86">
                <i className="fa-solid fa-calendar-check me-2"></i>Save The Date
              </a>

              <div className="d-flex justify-content-center align-items-center mt-4 mb-2">
                <div className="mouse-animation border border-2">
                  <div className="scroll-animation"></div>
                </div>
              </div>

              <p className="m-0">Scroll Down</p>
            </div>
          </section>
        </main>

        <WelcomeModal />
      </div>
    );
  }
}

export default App;