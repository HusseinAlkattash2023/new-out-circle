import { useEffect , useState , Fragment, useCallback} from 'react';
import './index.css';
import { useSelector } from "react-redux";
import Axios from 'axios';

const DetailsAds = () => {

    const ads_id = localStorage.getItem("ads_id")

    const [adsInfo, setAdsInfo] = useState([]);

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    const getAllNotifications = useCallback(() => {
        return new Promise((resolve, reject) => {
        Axios.get(`${BASE_API_URL}/api/ads/ads-info/6392b9b0c403c854be2f0ef4`)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => reject(err));
        });
    }, [BASE_API_URL]);
    useEffect(()=> {
        getAllNotifications()
        .then((data)=> {
            setAdsInfo(data);
            console.log(data)
        })
        .catch((err) => console.log(err))
    } , [BASE_API_URL , getAllNotifications])
    return (
    <div className="details_ads">
        <div className='rectangle'>
        {
            adsInfo.map((item) => (
                <Fragment key={item._id} className="item">
                    {/* <img src={`http://localhost:8000/${item.file_paths[0]}`} alt="" className="image"/> */}
                    <p>{item.text}</p>
                </Fragment>
            ))
        }
        </div>
    </div>
)
}

export default  DetailsAds;
//${BASE_API_URL}/api/ads/ads-info/${ads_id}