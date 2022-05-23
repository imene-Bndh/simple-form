import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form'
import './App.css';
import avatar from "./images/avatar.webp"

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="col-1">
          <img src={avatar} alt="" className="avatar"></img>
        </div>
        <div className="col-2">
          <h4 >
            Thank you four joining our lovely community.
            But before going any further we whould like to know more about you.
        </h4>
        </div>
      </div>
      <div className="simple-forme">
        <Form.Label className="lbl">First name</Form.Label>
        <Form.Control
          className="inpt"
          type="text"
          id="first-name"
        />
        <Form.Label className="lbl">Last name</Form.Label>
        <Form.Control
          className="inpt"
          type="text"
          id="last-name"
        />
        <Form.Label className="lbl">Age</Form.Label>
        <Form.Control
          className="inpt"
          type="text"
          id="age"
        />
      </div>
    </div>
  );
}

export default App;
