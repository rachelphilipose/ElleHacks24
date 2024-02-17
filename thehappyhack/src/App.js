import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.scss';
import logo from './logo.svg';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import CreateNote from './components/Notes/CreateNote';
import Notes from './components/Notes';

const App = () => {
  return (
  <div className='body'>

    <div className='mt-3'>
      <div className='container'>
        <h1>theHappyHack ;)</h1>
        <LoginButton/>
        <LogoutButton/>
      </div>
    </div>

    <div className='mt-5'>
      <div className='container'>
        <h2>Welcome to the Happy Place</h2>
        <div className='row'>
          <div className= 'col-sm-4'>
          <div className="card" >
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
          </div>
          </div>

      <div className= 'col-sm-4'>
        <div className="card" >
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>
        

      <div className= 'col-sm-4'>
        <div className="card" >
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </div>

      </div>
      <Notes/>
      </div>


    </div>

  </div>
  );
};

export default App;
