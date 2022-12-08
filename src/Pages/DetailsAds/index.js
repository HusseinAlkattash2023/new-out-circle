import { useEffect , useState } from 'react';
import './index.css';
import { useSelector } from "react-redux";
import Axios from 'axios';

const DetailsAds = () => {
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
    <div className="details_ads">
        <div className='rectangle'>
        {
                    adsInfo && adsInfo.map((item) => (
                        <div key={item._id} className="item">
                            <img src={`http://localhost:8000/${item.file_paths[0]}`} alt="" className="image"/>
                            <p>{item.text}</p>
                        </div>
                    ))
                }
        </div>
    </div>
)
}

export default  DetailsAds;
