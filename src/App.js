import './App.css';
import Nav from './header/header';
import Nf_ori from './nf_original/nf_original';
import Extv from './excited_tv/ex_tv';
import Foote from './footer/foot';
import Pop from './popular_on_netflix/pop_nf'


function App() {
  return (
    <>
      <Nav/>
      <Nf_ori/>
      {/* <Pop /> */}
      <Extv />
      <Foote/>
    </>  
  );
}

export default App;
