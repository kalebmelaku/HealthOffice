import {Routes, Route} from "react-router-dom"
import Home from "./page/home";
import NewsDetail from "./page/newsDetail";
// import LatestNews from './components/latestNews';

export default function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/newsDetail' element={<NewsDetail />}/>
      </Routes>
    </>
  );
}
