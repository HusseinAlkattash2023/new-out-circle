import React , {useState , useEffect}  from 'react'
import Home from './pages/Home/Home'
import Visiter from './component/Visiter/Visiter'
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import LoginCorporate from './pages/LoginAsCorporate/LoginCorporate';
import RegisterInstituse from './pages/RegisterInstituse/RegisterInstituse';
import RegisterScientific from './pages/RegisterScientific/RegisterScientific';
import RegisterHandicraft from './pages/RegisterHandicraft/RegisterHandicraft';
import RegisterIndividuals from './pages/RegisterIndividuals/RegisterIndividuals';
import WhyUs from './pages/WhyUs/WhyUs';
import Goals from './pages/Goals/Goals'
import ContactUs from './pages/ContactUs.js/ContactUs';
import Individuals from './pages/Individuals/Individuals';
import CareerServices from './pages/CareerServices/CareerServices';
import PersonalServices from './pages/PersonalServices/PersonalServices';
import Handicraft from './pages/Handicraft/Handicraft';
import Scietific from './pages/Scientific/Scientific';
import Institute from './pages/Institute/Institute';
import Croporate from './pages/Croporate/Croporate';
import Ads from './pages/Ads/Ads';
import News from './pages/News/News';
import Notifications from './pages/Notifications/Notifications';
import {BrowserRouter , Routes , Router  , Route} from 'react-router-dom'
import ProfileIndividual from './pages/ProfileIndividual/ProfileIndividual';
import ChangePassword from './component/ChangePassword/ChangePassword';
import ProfileHandicraft from './pages/ProfileHandicraft/ProfileHandicraft';
import ProfileScientific from './pages/ProfileScientific/ProfileScientific';
import ServiceInstitute from './pages/ServiceInstitute/ServiceInstitute';
import ProfileInstitute from './pages/ProfileInstitue/ProfileInstitute';
import {HomeAr , WhyUsAr , GoalsAr , CorporateAr , HandicraftAr , InstituteAr , LoginAr , ScientificAr , IndividualsAr , CareerServicesAr} from './index_';
import {RegisterAr , PersonalServicesAr} from './index_'
import CorporateService1 from './pages/CorporateServices/CorporateService_1/CorporateService_1'
import CorporateService2 from './pages/CorporateServices/CorporateService_2/CorporateService_2'
import CorporateService3 from './pages/CorporateServices/CorporateService_3/CorporateService_3';
import CorporateService4 from './pages/CorporateServices/CorporateService_4/CorporateService_4';
import CorporateService5 from './pages/CorporateServices/CorporateService_5/CorporateService_5'
import CorporateService6 from './pages/CorporateServices/CorporateService_6/CorporateService_6'
import CorporateService7 from './pages/CorporateServices/CorporateService_7/CorporateService_7'
import CorporateService8 from './pages/CorporateServices/CorporateService_8/CorporateService_8'
import HandicraftServices1 from './pages/HandicraftServices/HandicraftServices_1/HandicraftServices_1'
import HandicraftServices2 from './pages/HandicraftServices/HandicraftServices_2/HandicraftServices_2'
import HandicraftServices3 from './pages/HandicraftServices/HandicraftServices_3/HandicraftServices_3'
import HandicraftServices4 from './pages/HandicraftServices/HandicraftServices_4/HandicraftServices_4'
import HandicraftServices5 from './pages/HandicraftServices/HandicraftServices_5/HandicraftServices_5'
import HandicraftServices6 from './pages/HandicraftServices/HandicraftServices_6/HandicraftServices_6'
import HandicraftServices7 from './pages/HandicraftServices/HandicraftServices_7/HandicraftServices_7'
import HandicraftServices8 from './pages/HandicraftServices/HandicraftServices_8/HandicraftServices_8'
import InstituteService1 from './pages/InstituteServices/InstituteService_1'
import InstituteService2 from './pages/InstituteServices/InstituteService_2'
import InstituteService3 from './pages/InstituteServices/InstituteService_3'
import InstituteService4 from './pages/InstituteServices/InstituteService_4'
import InstituteService5 from './pages/InstituteServices/InstituteService_5'
import InstituteService6 from './pages/InstituteServices/InstituteService_6'
import InstituteService7 from './pages/InstituteServices/InstituteService_7'
import InstituteService8 from './pages/InstituteServices/InstituteService_8'
import ScietificService1 from './pages/ScientificServices/ScientificService_1'
import ScietificService2 from './pages/ScientificServices/ScientificService_2'
import ScietificService3 from './pages/ScientificServices/ScientificService_3'
import ScietificService4 from './pages/ScientificServices/ScientificService_4'
import ScietificService5 from './pages/ScientificServices/ScientificService_5'
import ScietificService6 from './pages/ScientificServices/ScientificService_6'
import ScietificService7 from './pages/ScientificServices/ScientificService_7'
import ScietificService8 from './pages/ScientificServices/ScientificService_8'
import {CareerService1 , CareerService2 , CareerService3 , CareerService4 , CareerService5 , CareerService6} from './index_'
import {PersonalService1 , PersonalService2 , PersonalService3 , PersonalService4 , PersonalService5} from './index_'
function App () {
  const [individual_ , setIndividual_] = useState(true)
  const [handicraft_ , setHandicraft_] = useState(true)
  const [sceintific_ , setSceintific_] = useState(true);
  const [show_ar , setShow_Ar] = useState(true)

  const routes = [
    {
      path:"/",
      element:<Home setShow_Ar = {setShow_Ar}/>,
    },{
      path:'/login',
      element:<Login/>,
    }
    ,{
      path:'/register',
      element:<Register/>,
    },{
      path:'/register_coporate',
      element:<LoginCorporate/>,
    },{
      path:'/register_institute',
      element:<RegisterInstituse/>,
    },{
      path:'/register_prof',
      element:<RegisterScientific setSceintific_={setSceintific_}/>,
    },{
      path:'/register_hand',
      element:<RegisterHandicraft setHandicraft_={setHandicraft_}/>,
    },{
      path:'/register_individuals',
      element:<RegisterIndividuals setIndividual_={setIndividual_}/>,
    },{
      path:'/whyus',
      element:<WhyUs/>,
    },{
      path:'/goals',
      element:<Goals/>,
    },{
      path:'/contactus',
      element:<ContactUs/>,
    },{
      path:'/individuals',
      element:<Individuals individual_={individual_}/>,
    },{
      path:'/careerservice',
      element:<CareerServices/>,
    },{
      path:'/personalservices',
      element:<PersonalServices/>,
    },{
      path:'/handicraft',
      element:<Handicraft handicraft_={handicraft_}/>,
    },{
      path:'/scientific',
      element:<Scietific sceintific_={sceintific_}/>,
    },{
      path:'/institute',
      element:<Institute/>,
    },{
      path:'/croporate',
      element:<Croporate/>,
    },{
      path:'/news',
      element:<News/>,
    },{
      path:'/ads',
      element:<Ads/>,
    },{
      path:'/profile_individual',
      element:<ProfileIndividual/>,
    },{
      path:'/notifications',
      element:<Notifications/>,
    },{
      path:'/change_password',
      element:<ChangePassword/>,
    },{
      path:'/profile_handicraft',
      element:<ProfileHandicraft/>,
    },{
      path:'/profile_scientific',
      element:<ProfileScientific/>,
    },{
      path:'/profile_institute',
      element:<ProfileInstitute/>,
    },{
      path:'/visitor',
      element:<Visiter/>,
    },{
      path:'/corporate/service_1',
      element:<CorporateService1/>
    },{
      path:'/corporate/service_2',
      element:<CorporateService2/>
    },{
      path:'/corporate/service_3',
      element:<CorporateService3/>
    },{
      path:'/corporate/service_4',
      element:<CorporateService4/>
    },{
      path:'/corporate/service_5',
      element:<CorporateService5/>
    },{
      path:'/corporate/service_6',
      element:<CorporateService6/>
    },{
      path:'/corporate/service_7',
      element:<CorporateService7/>
    },{
      path:'/corporate/service_8',
      element:<CorporateService8/>
    },{
      path:'/handicraft/service_1',
      element:<HandicraftServices1/>
    },{
      path:'/handicraft/service_2',
      element:<HandicraftServices2/>
    },{
      path:'/handicraft/service_3',
      element:<HandicraftServices3/>
    },{
      path:'/handicraft/service_4',
      element:<HandicraftServices4/>
    },{
      path:'/handicraft/service_5',
      element:<HandicraftServices5/>
    },{
      path:'/handicraft/service_6',
      element:<HandicraftServices6/>
    },{
      path:'/handicraft/service_7',
      element:<HandicraftServices7/>
    },{
      path:'/handicraft/service_8',
      element:<HandicraftServices8/>
    },{
      path:'/institute/service_1',
      element:<InstituteService1/>
    },{
      path:'/institute/service_2',
      element:<InstituteService2/>
    },{
      path:'/institute/service_3',
      element:<InstituteService3/>
    },{
      path:'/institute/service_4',
      element:<InstituteService4/>
    },{
      path:'/institute/service_5',
      element:<InstituteService5/>
    },{
      path:'/institute/service_6',
      element:<InstituteService6/>
    },{
      path:'/institute/service_7',
      element:<InstituteService7/>
    },{
      path:'/institute/service_8',
      element:<InstituteService8/>
    },{
      path:'/scientific/service_1',
      element:<ScietificService1/>
    },{
      path:'/scientific/service_2',
      element:<ScietificService2/>
    },{
      path:'/scientific/service_3',
      element:<ScietificService3/>
    },{
      path:'/scientific/service_4',
      element:<ScietificService4/>
    },{
      path:'/scientific/service_5',
      element:<ScietificService5/>
    },{
      path:'/scientific/service_6',
      element:<ScietificService6/>
    },{
      path:'/scientific/service_7',
      element:<ScietificService7/>
    },{
      path:'/scientific/service_8',
      element:<ScietificService8/>
    },{
      path:'/careerservice/service-1',
      element:<CareerService1/>
    },{
      path:'/careerservice/service-2',
      element:<CareerService2/>
    },{
      path:'/careerservice/service-3',
      element:<CareerService3/>
    },{
      path:'/careerservice/service-4',
      element:<CareerService4/>
    },{
      path:'/careerservice/service-5',
      element:<CareerService5/>
    },{
      path:'/careerservice/service-6',
      element:<CareerService6/>
    },{
      path:'/personalservice/service-1',
      element:<PersonalService1/>
    },{
      path:'/personalservice/service-2',
      element:<PersonalService2/>
    },{
      path:'/personalservice/service-3',
      element:<PersonalService3/>
    },{
      path:'/personalservice/service-4',
      element:<PersonalService4/>
    },{
      path:'/personalservice/service-5',
      element:<PersonalService5/>
    }
  ];
  const routes_ar = [
    {
        path:"/",
        element:<HomeAr setShow_Ar={setShow_Ar}/>
    },{
      path:"/whyus",
      element:<WhyUsAr/>
  },{
    path:"/goals",
    element:<GoalsAr/>
  },{
    path:"/corporate",
    element:<CorporateAr/>
  },{
    path:"/handicraft",
    element:<HandicraftAr handicraft_={handicraft_}/>
  },{
    path:"/institute",
    element:<InstituteAr/>
  },{
    path:"/login",
    element:<LoginAr/>
  },{
    path:"/scientific",
    element:<ScientificAr sceintific_={sceintific_}/>
  },{
    path:"/individuals",
    element:<IndividualsAr individual_={individual_}/>
  },{
    path:"/careerservice",
    element:<CareerServicesAr/>
  },{
    path:"/register",
    element:<RegisterAr/>
  },{
    path:"/personalservices",
    element:<PersonalServicesAr/>
  }
]
  return (
      <BrowserRouter>
          <Routes>
                {
                  show_ar ? (
                    routes.map(({path, element}, key) => <Route exact path={path} element={element}  key={key} />)
                  ):(
                    routes_ar.map(({path, element}, key) => <Route exact path={path} element={element}  key={key} />)
                  )
                }
          </Routes>
      </BrowserRouter>
  )
}

export default App

