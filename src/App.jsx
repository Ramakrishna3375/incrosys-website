import {Route ,Routes, Navigate} from 'react-router-dom';
import IncrosysPage from './website/HomePage';
import CareersPage from './website/Careers';
import ClientsPage from './website/Clients';
import GalleryPage from './website/Gallery';
import ContactPage from './website/Contact';
import ItConsultingPage from './ItServicesOptions/ItConsulting';
import ItRecruitmentPage from './ItServicesOptions/ItRecruitment';
import ItProjectStaffingPage from './ItServicesOptions/ItProjectStaffing';
import ItAssessmentServicesPage from './ItServicesOptions/ItAssessmentServices';
import CloudComputingServicesPage from './ItServicesOptions/CloudComputingServices';
import ItStrategyPlanningPage from './ItServicesOptions/ItStrategyPlanning';
import HrConsultingPage from './HrServicesOptions/HrConsulting';
import EmployeeTrainingDevelopmentPage from './HrServicesOptions/EmployeeTrainingDevelopment';


function App(){
return(
    <>
      <Routes>
        <Route path="/" element={<IncrosysPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/it-consulting" element={<ItConsultingPage />} />
        <Route path="/it-recruitment" element={<ItRecruitmentPage />} />
        <Route path="/it-project-staffing" element={<ItProjectStaffingPage />} />
        <Route path="/it-assessment-services" element={<ItAssessmentServicesPage />} />
        <Route path="/cloud-computing-services" element={<CloudComputingServicesPage />} />
        <Route path="/it-strategy-planning" element={<ItStrategyPlanningPage />} />
        <Route path="/hr-consulting" element={<HrConsultingPage />} />
        <Route path="/employee-training-development" element={<EmployeeTrainingDevelopmentPage />} />
        
      </Routes>
    </>
  );
}
export default App;
