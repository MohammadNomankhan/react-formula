import Header from '../components/Foogle/Header';
import Main from '../components/Foogle/Main';
import Footer from '../components/Foogle/Footer';

const Foogle = () => {
  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <Main />
      <Footer />
    </div>
  );
};

export default Foogle;
