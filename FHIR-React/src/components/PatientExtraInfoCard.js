import { bootstrap } from 'bootstrap'; // Need to keep this for tabs to work
import '../stylesheets/PatientInfoAdditionalCard.css';
import '../stylesheets/PatientInfoBasicCard.css';
import '../stylesheets/PatientInfo.css';
import PatientAdditionalInfo from './PatientAdditionalInfo';
import AllergyIntolerance from './AllergyIntolerance';
import Procedures from './Procedures';

const PatientExtraInfoCard = ({ patientInfo, id }) => {
  return (
    <div className="card bg-dark text-center">
      <div className="card-header">
        <ul className="nav nav-tabs card-header-tabs nav-fill" role="tablist">
          <li className="nav-item" role="presentation">
            <button
              className="nav-link card-nav active"
              id="home-tab"
              data-bs-toggle="tab"
              data-bs-target="#home"
              type="button"
              role="tab"
              aria-controls="home"
              aria-selected="true"
            >
              Additional info
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link card-nav"
              id="profile-tab"
              data-bs-toggle="tab"
              data-bs-target="#profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
            >
              Allergy intolerances
            </button>
          </li>
          <li className="nav-item" role="presentation">
            <button
              className="nav-link card-nav"
              id="contact-tab"
              data-bs-toggle="tab"
              data-bs-target="#contact"
              type="button"
              role="tab"
              aria-controls="contact"
              aria-selected="false"
            >
              Procedures
            </button>
          </li>
        </ul>
      </div>
      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="home"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <PatientAdditionalInfo patientInfo={patientInfo} />
        </div>
        <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
          <AllergyIntolerance patientID={id} />
        </div>
        <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
          <Procedures patientID={id} />
        </div>
      </div>
    </div>
  );
};

export default PatientExtraInfoCard;
