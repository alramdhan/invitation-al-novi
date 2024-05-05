import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { useSearchParams } from 'react-router-dom';
import bunga1 from './images/bunga1.png';
import './App.css';

function WelcomeModal() {
    const [queryParam] = useSearchParams();
    const [show, setShow] = useState(true);
    const handleClose = () => setShow(false);
    // const queryParam = new URLSearchParams(window.location.search);
    // const name = queryParam.get("to");
    var [modalClose, setModalClose] = useState("");

    const onClick = () => {
        setModalClose("tutup-welcome");
        setInterval(() => {
            setShow(false);
        }, 3000);
    };

    return(
        <>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop={"static"}
                fullscreen={true}
                keyboard={false}
                centered={true}
                scrollable={false}
                className={modalClose}
            >
                <Modal.Body className={"bg-black p-0 m-0"}>
                    <div id="welcome" style={{opacity: 1}}>
                        <div className="d-flex justify-content-center align-items-center">
                            <div className="text-center w-100 p-0 d-flex-column">
                                <div style={{
                                    width: 100+"%",
                                    height: 175,
                                    background: `url(${bunga1})`,
                                    backgroundSize: "contain"
                                }} />
                                <h1 className="font-esthetic mb-4" data-aos="flip-left" data-aos-delay="750" data-aos-duration="2000" style={{fontSize: 2.7+"rem"}}>The Wedding Of</h1>
                                
                                <div className="col-12 img-crop border border-3 border-burgundy mb-4 mx-auto rounded-circle"
                                    data-aos="flip-right" data-aos-delay="1000" data-aos-duration="2000"
                                    style={{
                                        width: 160,
                                        height: 160,
                                        boxShadow: "0px 10px 20px 0px rgba(232,232,232,0.5)",
                                        background: "url('https://www.brides.com/thmb/wb0WW5OfI6IDrX3Rm0oMS3l8Jt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/wedding-planning-ultimate-guide-recirc-Janet-Lin-Photography-f3d7c8f9fe854f69ada0fc53e6d100bd.jpg')",
                                        backgroundSize: "cover",
                                    }}>
                                </div>

                                <h1 className="font-esthetic my-4" data-aos="zoom-in" data-aos-delay="1500" data-aos-duration="2000" style={{fontSize: 2.5+"rem"}}>Al &amp; Novi</h1>
                                <div id="guest-name" data-aos="fade-down" data-aos-delay="1750" data-aos-duration="2000" style={{color: "#E2E2EF"}}>Kepada Yth Bapak/Ibu/Saudara/i</div>
                                <h3 className='mb-3 mr-auto' data-aos="fade-down" data-aos-delay="1850" data-aos-duration="2000" style={{color: "#E2E2EF"}}>{queryParam.get("to")}</h3>
                                <div style={{height: 32}}></div>
                                <div className='mb-4'>
                                    <Button variant="light" onClick={onClick} className="rounded-pill">
                                        <FontAwesomeIcon icon={faEnvelope} />&nbsp;Buka Undangan
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}

export default WelcomeModal;