// import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
// import AuthPage from 'pages/AuthPage';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import SignIn from 'pages/SignPage';

const DashboardPage = React.lazy(() => import('pages/DashboardPage'));

/* New Page loading using easy loading */
const PateintRegistationPage = React.lazy(() => import('components/patient/PateintRegistationPage'));
const EditPatient = React.lazy(() => import('components/patient/EditPatient'));

const CheckInPage = React.lazy(() => import('components/CheckIn/CheckInPage'));
const VitalSignsPage = React.lazy(() => import('components/Vitals/VitalSignsPage'));
/* Consultation page loading */
const ConsultationPage = React.lazy(() => import('pages/ConsultationPage'));
const ConsultationDashboardPage = React.lazy(() => import('components/Consultation/Dashboard'));
/* Laboratory page loading */
const LaboratoryPage = React.lazy(() => import('components/Laboratory/LaboratoryPage'));
const TestOrder = React.lazy(() => import('components/Laboratory/TestOrder'));
const CollectSample = React.lazy(() => import('components/Laboratory/CollectSample'));
const CollectedSample = React.lazy(() => import('components/Laboratory/CollectedSample'));
const ViewResult = React.lazy(() => import('components/Laboratory/ViewResult'));
const TestResult = React.lazy(() => import('components/Laboratory/TestResult'));
const PatientsPage = React.lazy(() => import('components/patient/PatientsPage'));

/* Pharmacy page loading */
/* Pharmacy page loading */
const PharmacyPage = React.lazy(() => import('components/Pharmacy/PharmacyPage'));
const PendingPrescription = React.lazy(() => import('components/Pharmacy/PendingPrescription'));
const Viewprescription = React.lazy(() => import('components/Pharmacy/ViewPrescription'));
const DispensedPrescription = React.lazy(() => import('components/Pharmacy/DispensedPrescription'));
const AppointmentPage = React.lazy(() => import('pages/AppointmentPage'));
const CheckInPatientPage = React.lazy(() => import('components/CheckIn/CheckedInPatientPage'));
const ViewVitalsPage = React.lazy(() => import('components/Vitals/ViewVitalsPage'));
const AddVitalsPage = React.lazy(() => import('components/Vitals/AddVitalsPage'));
// const CheckInModal = React.lazy(() => import('components/CheckIn/CheckInModal'));


/* HIV PAge Loading */
const EnrollmentList = React.lazy(() => import('components/Hiv/EnrollmentList'));
const EnrollPatient = React.lazy(() => import('components/Hiv/EnrollPatient'));
const EnrolledPatients = React.lazy(() => import('components/Hiv/EnrolledPatients')); 
const EnrolledPatientsDashboard = React.lazy(() => import('components/Hiv/EnrolledPatientsDashboard'));
/* Sample Test table i design */
const DataTable1 = React.lazy(() => import('pages/DataTable/DataTable1'));
const DataTable2 = React.lazy(() => import('pages/DataTable/DataTable2'));
const TestPage = React.lazy(() => import('pages/TestPage'));
const TestPage2 = React.lazy(() => import('pages/TestPage2'));
const getBasename = () => {
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter basename={getBasename()}>
        <GAListener>
          <Switch>
          {/* <Route  path="/signin" component={SignInSide} /> */}        
            <LayoutRoute
              exact
              path="/"
              layout={EmptyLayout}
              component={SignIn}
            />
            
            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                
                {/* The new routes are here  */}
                <Route exact path="/dashboard" component={DashboardPage} />
                <Route exact path="/patient-registration" component={PateintRegistationPage} />
                <Route exact path="/checkin" component={CheckInPage} />
                <Route exact path="/vital-signs" component={VitalSignsPage} />
                {/* Consultation Links */}
                <Route exact path="/consultation" component={ConsultationPage} />
                <Route exact path="/consultation-dashbaord" component={ConsultationDashboardPage} />

                <Route exact path="/laboratory" component={LaboratoryPage} />
                <Route exact path="/view-result" component={ViewResult} />
                <Route exact path="/test-order" component={TestOrder} />
                <Route exact path="/collected-sample" component={CollectedSample} />
                <Route exact path="/test-result" component={TestResult} />
                <Route exact path="/collect-sample" component={CollectSample} />
                {/* Patient Route */}

                <Route exact path="/patients" component={PatientsPage} /> 
                <Route exact path="/edit-patient/:id" component={EditPatient} /> 
                {/* Pharmacy Links */}
                <Route exact path="/pharmacy" component={PharmacyPage} />
                <Route exact path="/pending-prescription" component={PendingPrescription} />
                <Route exact path="/view-prescription" component={Viewprescription} />
                <Route exact path="/dispensed-prescription" component={DispensedPrescription} />

                <Route exact path="/appointment" component={AppointmentPage} />
                <Route exact path="/checkedin-patients" component={CheckInPatientPage} />
                <Route exact path="/view-vitals" component={ViewVitalsPage} />
                <Route exact path="/add-vitals" component={AddVitalsPage} />
                {/* <Route exact path="/checkin-modal" component={CheckInModal} /> */}
                
                {/* The rout to Hiv Module */}
                <Route exact path="/enrollment-list" component={EnrollmentList} />
                <Route exact path="/enroll-patient" component={EnrollPatient} />
                <Route exact path="/enrolled-patients" component={EnrolledPatients} />
                <Route exact path="/enroll-patient-dashboard" component={EnrolledPatientsDashboard} />
               {/* The rout to that DataTabel */}
               <Route exact path="/data-table1" component={DataTable1} />
               <Route exact path="/data-table2" component={DataTable2} />
               <Route exact path="/testpage" component={TestPage} />
               <Route exact path="/testpage2" component={TestPage2} />
              </React.Suspense>
            </MainLayout>
            
            <Redirect to="/" />
          </Switch>
        </GAListener>
      </BrowserRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
