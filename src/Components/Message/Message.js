import {useEffect , useState} from 'react';
import './Message.css';
import {Link} from 'react-router-dom';
import uploade from '../../Assets/images/Group 375.png';
import check from '../../Assets/images/check_box.png';
import back from '../../Assets/images/back.png';
import send_message from '../../Assets/images/sendMessage.png';
import { AudioRecorder  } from 'react-audio-voice-recorder';
import logo from '../../Assets/images/logo.svg'

function getWindowSize() {
    const {innerWidth, innerHeight} = window;
    return {innerWidth, innerHeight};
}

const Message = ({address , head , image , text , text1 , text2 , text3 , text4 , text5 , text6 , text7}) => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
        }, []);
        const width = windowSize.innerWidth;
    return (
        width > 600 ? (
            <Message1 
            text = {text} image = {image} 
            />
        ):(
            <Message2 
            head ={head} address={address}
            text1 = {text1} text2 = {text2}
            text3 = {text3} text4 = {text4}
            text5 = {text5} text6 = {text6}
            text7 = {text7} />
        )
        )
}

export default Message;

const Message1 = ({text , image}) => {
    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
        const nest = document.body.appendChild(audio);
        nest.className="fff"
    };

    return (
        <div className='message'>
            <Link to="/corporate" className='back'>
                <span>Back</span>
                <img src={back} alt=""/>
            </Link>
            <div className="section1">
                <div className="div1">
                    <p>{text}</p>
                </div>
                <div className='side'>
                    <img src={`${image}`} alt=""/>
                </div>
            </div>
            <div className='section2'>
                <form>
                    <textarea  placeholder='Write message here...'></textarea>
                    <div className='upload'>
                        <p>Upload file here for more detials</p>
                        <Link to="">
                            <img src={uploade} alt="" width="40px"/>
                        </Link>
                    </div>
                    <div className="audio">
                        <AudioRecorder  onRecordingComplete={addAudioElement} />
                    </div>
                    <div>
                        <button>
                            <img src={send_message} alt=""/>
                        </button>
                    </div>
                </form>
                <Link to="/visitor">
                    <div className='check'>
                        <p>Information that must be complated first in case you are a visitor to send that request.</p>
                        <img src={check} alt="" width="40px"/>
                    </div>
                </Link>
                <div className='wages'>
                    Wages are determined after studying the request and 
                    before complation. In some services, a payment of wages is requesred as a downpayment.
                </div>
            </div>
        </div>
)
}


const Message2 = ({ address , head , text1 , text2 , text3 , text4 , text5 , text6 , text7}) => {

    const addAudioElement = (blob) => {
        const url = URL.createObjectURL(blob);
        const audio = document.createElement("audio");
        audio.src = url;
        audio.controls = true;
        document.body.appendChild(audio);
        const nest = document.body.appendChild(audio);
        nest.className="sss"
    };

return(
    <div className = "message2">
        <div className="head">
            <img className="logo" src={logo} alt=""/>
            <h2 className="head2">{head}</h2>
            <p className="address">{address}</p>
        </div>
        <div className="body_">
            <div>
                <p>{text1}</p>
            </div>
            <div>
                <p>{text2}</p>
            </div>
            <div>
                <p>{text3}</p>
            </div>
            <div>
                <p>{text4}</p>
            </div>
            <div>
                <p>{text5}</p>
            </div>
            <div>
                <p>{text6}</p>
            </div>
            <div>
                <p>{text7}</p>
            </div>
        </div>
        <div className="content">
        <form>
                <textarea className="textarea"  placeholder='write your message here...'></textarea>
                <div className='upload'>
                    <label htmlFor="file">
                        <img src={uploade} alt="" width="40px"/>
                        <p>Upload file here for more detials</p>
                    </label>
                    <input id="file" type="file" style={{display:"none"}}/>
                </div>
                <div className="audio_ar">
                    <AudioRecorder  onRecordingComplete={addAudioElement} />
                </div>
                <div>
                    <button>
                        <img src={send_message} alt=""/>
                    </button>
                </div>
            </form>
            <Link to="/visitor">
                <div className='check'>
                    <img src={check} alt="" width="30px"/>
                    <p>Information that must be complated first in case you are a visitor to send that request.</p>
                </div>
            </Link>
            <div className='wages_'>
                    Wages are determined after studying the request and 
                    before complation. In some services, a payment of wages is requesred as a downpayment.
            </div>
        </div>
    </div>
)
}
