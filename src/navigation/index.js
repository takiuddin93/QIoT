import React from 'react';
import {View} from 'react-native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';

// AuthStack
import LoginScreen from '../layouts/AuthStack/Login';
import ForgotPasswordScreen from '../layouts/AuthStack/ForgotPassword';
import ChangePasswordScreen from '../layouts/AuthStack/ChangePassword';
import SignUpScreen from '../layouts/AuthStack/SignUp';
import TermsConditionsScreen from '../layouts/AuthStack/TermsConditions';
import ThankYouScreen from '../layouts/AuthStack/ThankYou';
import VerificationScreen from '../layouts/AuthStack/Verification';
import AdditionalSetupScreen from '../layouts/AuthStack/AdditionalSetup';
import BasicDetailsScreen from '../layouts/AuthStack/BasicDetails';
import LocationAccessScreen from '../layouts/AuthStack/LocationAccess';
import NotificationsScreen from '../layouts/AuthStack/Notifications';
import PractionerNumberScreen from '../layouts/AuthStack/PractionerNumber';

import DrawerContent from '../layouts/DrawerContent';

// HomeStack
import HomeScreen from '../layouts/HomeStack/Home';
import PersonalPlanScreen from '../layouts/HomeStack/PersonalPlan';

// PeakFlowStack
import PeakFlowScreen from '../layouts/PeakFlowStack/PeakFlow';
import PeakFlowDetailScreen from '../layouts/PeakFlowStack/PeakFlowDetail';

// SteroidStack
import SteroidDoseScreen from '../layouts/SteroidStack/SteroidDose';

// ACTStack
import ControlTestScreen from '../layouts/ACTStack/ControlTest';
import ControlTestDetailScreen from '../layouts/ACTStack/ControlTestDetail';

// ReportStack
import ReportScreen from '../layouts/ReportStack/Report';
import ReportGraphScreen from '../layouts/ReportStack/ReportGraph';

// PollenStack
import PollenScreen from '../layouts/PollenStack/Pollen';

// EducationStack
import EducationScreen from '../layouts/EducationStack/Education';

// AboutStack
import AboutScreen from '../layouts/AboutStack/About';

// ProfileStack
import ProfileScreen from '../layouts/ProfileStack/Profile';
import ContactScreen from '../layouts/ContactScreen';

import HeaderTitle from '../components/HeaderTitle';

import Routes from './Routes';
import setHeaderLeft from './setHeaderLeft';
import getHeaderTitle from './getHeaderTitle';
import {Color} from '../utils/theme';

const screenOptions = ({navigation}) => ({
  headerLeft: () => setHeaderLeft('menu', navigation),
  headerRight: () => <View />,
  headerStyle: {
    backgroundColor: Color.SECONDARY,
    shadowOffset: {height: 0, width: 0},
    elevation: 0,
  },
  gestureEnabled: false,
  headerTitleAlign: 'left',
});

const setHeaderTitle = ({route}) => ({
  headerTitle: () => <HeaderTitle title={getHeaderTitle(route)} />,
});

const Auth = createStackNavigator();
export const AuthStack = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: false,
        ...TransitionPresets.SlideFromRightIOS,
      }}>
      <Auth.Screen name={Routes.Login} component={LoginScreen} />
      <Auth.Screen
        name={Routes.ForgotPassword}
        component={ForgotPasswordScreen}
      />
      <Auth.Screen
        name={Routes.ChangePassword}
        component={ChangePasswordScreen}
      />
      <Auth.Screen name={Routes.SignUp} component={SignUpScreen} />
      <Auth.Screen
        name={Routes.TermsConditions}
        component={TermsConditionsScreen}
      />
      <Auth.Screen name={Routes.ThankYou} component={ThankYouScreen} />
      <Auth.Screen name={Routes.Verification} component={VerificationScreen} />
      <Auth.Screen
        name={Routes.AdditionalSetup}
        component={AdditionalSetupScreen}
      />

      <Auth.Screen name={Routes.BasicDetails} component={BasicDetailsScreen} />

      <Auth.Screen
        name={Routes.LocationAccess}
        component={LocationAccessScreen}
      />
      <Auth.Screen
        name={Routes.Notifications}
        component={NotificationsScreen}
      />
      <Auth.Screen
        name={Routes.PractionerNumber}
        component={PractionerNumberScreen}
      />
      <Auth.Screen name={Routes.ContactScreen} component={ContactScreen} />
    </Auth.Navigator>
  );
};

const Drawer = createDrawerNavigator();
export const DrawerStack = () => {
  return (
    <Drawer.Navigator
      overlayColor={Color.TRANSPARENT}
      screenOptions={{gestureEnabled: false}}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name={Routes.Home} component={HomeStack} />
      <Drawer.Screen name={Routes.PeakFlow} component={PeakFlowStack} />
      <Drawer.Screen name={Routes.SteroidDose} component={SteroidStack} />
      <Drawer.Screen name={Routes.ControlTest} component={ACTStack} />
      <Drawer.Screen name={Routes.Report} component={ReportStack} />
      <Drawer.Screen name={Routes.Pollen} component={PollenStack} />
      <Drawer.Screen name={Routes.Education} component={EducationStack} />
      <Drawer.Screen name={Routes.About} component={AboutStack} />
      <Drawer.Screen name={Routes.Profile} component={ProfileStack} />
    </Drawer.Navigator>
  );
};

const Home = createStackNavigator();
export const HomeStack = () => {
  return (
    <Home.Navigator screenOptions={screenOptions}>
      <Home.Screen
        name={Routes.Home}
        component={HomeScreen}
        options={setHeaderTitle}
      />
      <Home.Screen
        name={Routes.PersonalPlan}
        component={PersonalPlanScreen}
        options={setHeaderTitle}
      />
    </Home.Navigator>
  );
};

const PeakFlow = createStackNavigator();
export const PeakFlowStack = () => {
  return (
    <PeakFlow.Navigator screenOptions={screenOptions}>
      <PeakFlow.Screen
        name={Routes.PeakFlow}
        component={PeakFlowScreen}
        options={setHeaderTitle}
      />
      <PeakFlow.Screen
        name={Routes.PeakFlowDetail}
        component={PeakFlowDetailScreen}
        options={setHeaderTitle}
      />
    </PeakFlow.Navigator>
  );
};

const Steroid = createStackNavigator();
export const SteroidStack = () => {
  return (
    <Steroid.Navigator screenOptions={screenOptions}>
      <Steroid.Screen
        name={Routes.SteroidDose}
        component={SteroidDoseScreen}
        options={setHeaderTitle}
      />
    </Steroid.Navigator>
  );
};

const ACT = createStackNavigator();
export const ACTStack = () => {
  return (
    <ACT.Navigator screenOptions={screenOptions}>
      <ACT.Screen
        name={Routes.ControlTest}
        component={ControlTestScreen}
        options={setHeaderTitle}
      />
      <ACT.Screen
        name={Routes.ControlTestDetail}
        component={ControlTestDetailScreen}
        options={setHeaderTitle}
      />
    </ACT.Navigator>
  );
};

const Report = createStackNavigator();
export const ReportStack = () => {
  return (
    <Report.Navigator screenOptions={screenOptions}>
      <Report.Screen
        name={Routes.Report}
        component={ReportScreen}
        options={setHeaderTitle}
      />
      <Report.Screen name={Routes.ReportGraph} component={ReportGraphScreen} />
    </Report.Navigator>
  );
};

const Pollen = createStackNavigator();
export const PollenStack = () => {
  return (
    <Pollen.Navigator screenOptions={screenOptions}>
      <Pollen.Screen
        name={Routes.Pollen}
        component={PollenScreen}
        options={setHeaderTitle}
      />
    </Pollen.Navigator>
  );
};

const Education = createStackNavigator();
export const EducationStack = () => {
  return (
    <Education.Navigator screenOptions={screenOptions}>
      <Education.Screen
        name={Routes.Education}
        component={EducationScreen}
        options={setHeaderTitle}
      />
    </Education.Navigator>
  );
};

const About = createStackNavigator();
export const AboutStack = () => {
  return (
    <About.Navigator screenOptions={screenOptions}>
      <About.Screen
        name={Routes.About}
        component={AboutScreen}
        options={setHeaderTitle}
      />
    </About.Navigator>
  );
};

const Profile = createStackNavigator();
export const ProfileStack = () => {
  return (
    <Profile.Navigator screenOptions={screenOptions}>
      <Profile.Screen
        name={Routes.Profile}
        component={ProfileScreen}
        options={setHeaderTitle}
      />
      <Profile.Screen
        name={Routes.ContactScreen}
        component={ContactScreen}
        options={setHeaderTitle}
      />
      <Profile.Screen
        name={Routes.ChangePassword}
        component={ChangePasswordScreen}
        options={{headerShown: false}}
      />
    </Profile.Navigator>
  );
};
