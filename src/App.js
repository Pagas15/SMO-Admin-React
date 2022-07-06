import Header from "./components/Header";
import Breadcrumbs from "./components/Breadcrumbs";
import { Route, Routes } from "react-router-dom";
import { ADMIN_CONFIGURATION, ADMIN_REPORTS } from "./utils/consts";
import { Configuration, Reports, Report } from './pages';


const fakeServer = [
  {
    id: 1,
    country: "Belgium",
    owner: 'Andrey Guryev',
    category: 'bank',
    bankName: 'AXA Bank',
    bankNumber: '662356533459696923456',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 2,
    country: "Spain",
    owner: 'Andrey Guryev',
    imgLink: 'https://inlegal.eu/wp-content/uploads/2020/10/real-estate.jpg',
    category: 'realEstate',
    realCategory: 'Commercial',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 3,
    country: "Spain",
    owner: 'Andrey Guryev',
    imgLink: 'https://1office.co/sweden/wp-content/uploads/sites/13/2019/04/Register-Cleaning-Company-in-Singapore-e1594811625197.jpg',
    category: 'company',
    companyCategory: 'Rubikon',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 4,
    country: "France",
    owner: 'Andrey Guryev',
    imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Paris_-_Bonhams_2014_-_Ferrari_456GT_modoficata_coup%C3%A9_-_2003_-_001.jpg/1200px-Paris_-_Bonhams_2014_-_Ferrari_456GT_modoficata_coup%C3%A9_-_2003_-_001.jpg',
    category: 'car',
    carBrand: 'Ferrari',
    carModel: '456',
    licensPlate: 'x777xx',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 5,
    country: "Italy",
    owner: 'Andrey Guryev',
    imgLink: 'https://razom.sumy.ua/wp-content/uploads/2019/03/after-10-12-art-design-college.jpg',
    category: 'art',
    artCategory: 'Art Photo',
    artName: 'Art Photo Name',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 6,
    country: "Spain",
    owner: 'Andrey Guryev',
    imgLink: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Paris_-_Bonhams_2014_-_Ferrari_456GT_modoficata_coup%C3%A9_-_2003_-_001.jpg/1200px-Paris_-_Bonhams_2014_-_Ferrari_456GT_modoficata_coup%C3%A9_-_2003_-_001.jpg',
    category: 'hotel',
    hotelName: 'Ibis Hotel',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
  {
    id: 7,
    country: "Spain",
    owner: 'Andrey Guryev',
    imgLink: 'https://pix10.agoda.net/hotelImages/124/1246280/1246280_16061017110043391702.jpg?ca=6&ce=1&s=1024x768',
    category: 'other',
    reason: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    additionInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
  },
]

const App = () => {
  const someGetReport = (id) => {
    return fakeServer.find(item => item.id === id)
  }

  return (<>
    <Header />
    <Breadcrumbs />
    <div className="wrapper">
      <Routes >
        <Route path={ADMIN_REPORTS + '/'} >
          <Route path='' element={<Reports />} />
          <Route path=':reportId' element={<Report getReport={someGetReport} />} />
        </Route>
        <Route path={ADMIN_CONFIGURATION} element={<Configuration />}/>
      </Routes>
    </div>
  </>);
}

export default App;
