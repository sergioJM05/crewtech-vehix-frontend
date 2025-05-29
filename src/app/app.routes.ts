import { Routes } from '@angular/router';
import {RegistrationComponent} from './identity-and-guess-management/pages/registration/registration.component';

const HomeComponent=()=>import('./public/pages/home/home.component').then(m=>m.HomeComponent);
const LibraryComponent=()=>import('./public/pages/library/library.component').then(m=>m.LibraryComponent);
const MaintenanceComponent=()=>import('./public/pages/maintenance/maintenance.component').then(m=>m.MaintenanceComponent);
const ProblemForecastingComponent=()=>import('./service-operation-and-monitoring/pages/problem-forecasting/problem-forecasting.component').then(m=>m.ProblemForecastingComponent);
const CarUsefulLifeComponent=()=>import('./service-operation-and-monitoring/pages/car-useful-life/car-useful-life.component').then(m=>m.CarUsefulLifeComponent);
const RapidDiagnosticComponent=()=>import('./service-operation-and-monitoring/pages/rapid-diagnostic/rapid-diagnostic.component').then(m=>m.RapidDiagnosticComponent);
const RecentsRepairsComponent=()=>import('./service-operation-and-monitoring/pages/recents-repairs/recents-repairs.component').then(m=>m.RecentsRepairsComponent);
const LastScanComponent=()=>import('./service-operation-and-monitoring/pages/last-scan/last-scan.component').then(m=>m.LastScanComponent);
const AboutYourVehicleComponent=()=>import('./service-operation-and-monitoring/pages/about-your-vehicle/about-your-vehicle.component').then(m=>m.AboutYourVehicleComponent);
const SyncComponent=()=>import('./public/pages/sync/sync.component').then(m=>m.SyncComponent);
const ProfileComponent=()=>import('./public/pages/profile/profile.component').then(m=>m.ProfileComponent);
const TapScanComponent = () =>import('./service-operation-and-monitoring/pages/tap-scan/tap-scan.component').then(m=>m.TapScanComponent)
const MechanicComponent = () => import('./service-operation-and-monitoring/pages/mechanic/mechanic.component').then(m=>m.MechanicComponent)

const SubscriptionPlansComponent=()=>import('./subscription-and-payments/pages/subscription-plan/subscription-plan.component').then(m=>m.SubscriptionPlanComponent);

const baseTitle = 'VEHIX'

export const routes: Routes = [
  //load home just load the page
  {path: 'registration', component: RegistrationComponent , data: { title: `${baseTitle} | Registration`}},

  {path: 'subscription-plans', loadComponent: SubscriptionPlansComponent, data: { title: `${baseTitle} | Subscription plan`}},
  {path: 'home', loadComponent: HomeComponent, data: { title: `${baseTitle} | Home`}},
  //Lazy loading: the component is not
  // loaded into memory until the user
  // navigates to the route
  {path: 'library', loadComponent:LibraryComponent, data: { title: `${baseTitle} | Library`}},

  //Lazy loading: path Childrens
  {path: 'maintenance', loadComponent:MaintenanceComponent, data: { title: `${baseTitle} | Maintenance`}},
  {path: 'maintenance/problem-forecasting', loadComponent:ProblemForecastingComponent, data: { title: `${baseTitle} | Problem forecasting`}},
  {path: 'maintenance/car-useful-life', loadComponent:CarUsefulLifeComponent, data: { title: `${baseTitle} | Car useful life`}},
  {path: 'maintenance/rapid-diagnostic', loadComponent:RapidDiagnosticComponent, data: { title: `${baseTitle} | Rapid diagnostic`}},
  {path: 'maintenance/recents-repairs', loadComponent:RecentsRepairsComponent, data: { title: `${baseTitle} | Recents repairs`}},
  {path: 'maintenance/last-scan', loadComponent:LastScanComponent, data: { title: `${baseTitle} | Last scan`}},
  {path: 'maintenance/about-your-vehicle', loadComponent:AboutYourVehicleComponent, data: { title: `${baseTitle} | About your vehicle`}},
  {path: 'sync', loadComponent:SyncComponent, data: { title: `${baseTitle} | Sync`}},
  {path: 'profile', loadComponent: ProfileComponent, data: { title: `${baseTitle} | Profile`}},
  {path: 'maintenance/tap-scan', loadComponent: TapScanComponent, data: { title: `${baseTitle} | Tap scan`}},
  {path: 'maintenance/mechanic', loadComponent: MechanicComponent, data: { title: `${baseTitle} | Mechanic`}},

  //If the user does not enter anything
  // in the URL, he is redirected to home
  {path: '', redirectTo: '/registration', pathMatch: 'full'},
  {path: '**', loadComponent: () => import('./public/pages/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)},


];
