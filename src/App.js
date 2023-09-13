import './App.css';
import Nav from './components/header/header';
import Nf_ori from './components/nf_original/nf_original';
import Extv from './components/excited_tv/ex_tv';
// import Foote from './components/footer/foot';
import Pop from './components/popular_on_netflix/pop_nf'
import Tv_show from './components/tv_show/Tv_show'


function App() {
  return (
    <>
      <Nav/>
      <Nf_ori/>
      <Pop />
      <Extv />
      <Tv_show />
      {/* <Foote/> */}
    </>  
  );
}

export default App;
