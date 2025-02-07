import { School } from '../types/education.types';

//TODO this will porbbaly change with real school data
export const getImage = (school: School | undefined, imagebaseURL = '') => {
  if (school) {
    return (
      imagebaseURL +
      (school.mainSchoolImage ||
        school.mapSchoolImage ||
        'school-image-placeholder-rural.svg')
    );
  }
  return imagebaseURL + 'school-image-placeholder-rural.svg';
};
