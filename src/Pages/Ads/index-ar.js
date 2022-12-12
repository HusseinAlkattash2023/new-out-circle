import {useEffect , useState} from 'react';
import NewAdr from '../../Components/NewAdr/NewAdr';
import { useSelector } from "react-redux";
import back from '../../Assets/images/back.png';
import logo from '../../Assets/images/Group 360.svg';
import './index.css';
import {Link} from 'react-router-dom';
import Axios from 'axios';


const Ads = () => {
    const [adsInfo, setAdsInfo] = useState([]);

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    useEffect(() => {
        Axios.get(`${BASE_API_URL}/api/ads/all-ads`)
            .then((res) => {
            let data = res.data;
            setAdsInfo(data);
            console.log(data)
        })
        .catch((err) => console.log(err));
    }, [BASE_API_URL]);

    return (
        <div className='ads'>
            <header>
            <Link className='back_ar' to="/ar">
                <span>رجوع</span>
                <img src={back} alt="" width="30px"/>
            </Link>
            </header>
            <div className='rectangle_ar'>
                {
                    adsInfo && adsInfo.map((item) => (
                        <div key={item._id} className="item">
                            <img src={`${BASE_API_URL}/${item.file_paths[0]}`} alt="" className="image"/>
                            <Link to="/detials-ads" className="details text-danger">انقر لمزيد من التفاصيل</Link>
                        </div>
                    ))
                }
            </div>
            <div className='side_ar'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <span className='title'>الإعلانات</span>
            </div>
        </div>
)
}

export default Ads;