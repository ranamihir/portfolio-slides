import { library } from '@fortawesome/fontawesome-svg-core';
import {
  fab,
  faGithub,
  faLinkedin,
  faTripadvisor,
} from '@fortawesome/free-brands-svg-icons';
import {
  fas,
  faAt,
  faEnvelope,
  faGraduationCap,
  faUniversity,
  faSchool,
  faAtom,
  faChartLine,
  faChalkboardTeacher,
  faLanguage,
  faBrain,
  faCameraRetro,
  faComments,
} from '@fortawesome/free-solid-svg-icons';

const availableIcons = [
  fab,
  fas,
  faAt,
  faEnvelope,
  faGithub,
  faLinkedin,
  faTripadvisor,
  faGraduationCap,
  faUniversity,
  faSchool,
  faAtom,
  faChartLine,
  faChalkboardTeacher,
  faLanguage,
  faBrain,
  faCameraRetro,
  faComments,
];

library.add(...availableIcons);
