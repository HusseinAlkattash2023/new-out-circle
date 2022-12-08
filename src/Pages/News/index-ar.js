import { useEffect , useState } from 'react';
import {Link} from 'react-router-dom';
import Axios from 'axios';
import { useSelector } from "react-redux";
import back from '../../Assets/images/back.png';
import logo from '../../Assets/images/Group 360.svg';
import './index.css';

const News = () => {
    const [newsInfo, setNewsInfo] = useState([]);

    const BASE_API_URL = useSelector((state) => state.BASE_API_URL);

    useEffect(() => {
    Axios.get(`${BASE_API_URL}/api/news/all-news`)
    .then((res) => {
        let data = res.data;
        setNewsInfo(data); 
    })
    .catch((err) => console.log(err));
}, [BASE_API_URL]);
return (
    <div>
        <div className='news'>
            <header>
            <Link className='back_ar' to="/ar">
                <span>رجوع</span>
                <img src={back} alt="" width="30px"/>
            </Link>
            </header>
            <div className='rectangle_ar'>
                {
                    newsInfo.map((item) => (
                        <div key={item._id} className="content">
                            <p>{item.content}</p>
                        </div>
                    ))
                }
            </div>
            <div className='side_ar'>
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <span className='title'>الأخبار</span>
            </div>
        </div>
    </div>
  )
}

export default News;