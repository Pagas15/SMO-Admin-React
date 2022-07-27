import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, ADMIN_CONFIGURATION, ADMIN_REPORTS, URL_GET_ADMIN, URL_MAIN_LOGIN } from "./utils/consts";
import { Configuration, Reports, Report } from './pages';
import { useEffect, useState } from "react";
import { getCookie, request, setCookie } from "./utils/scripts";



const App = () => {
  const [login, setLogin] = useState(false);
  
  useEffect(() => {
    request({
      url: URL_GET_ADMIN,
      callBack: (result) => {
        !(Object.keys(result).length) && (window.location.href = URL_MAIN_LOGIN);
        setLogin(result);
      }
    })
  }, [])

  return (<>
    <Header infoLogin={login} />
    <Breadcrumbs />
    <div className="wrapper">
      <Routes >
        <Route path={ADMIN_REPORTS + '/'} >
          <Route path='' element={<Reports />} />
          <Route path=':reportId' element={<Report />} />
        </Route>
        <Route path={ADMIN_CONFIGURATION} element={<Configuration />}/>
      </Routes>
    </div>
  </>);
}

export default App;
