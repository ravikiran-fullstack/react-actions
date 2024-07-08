import { CircularProgress } from '@mui/material';
import { Suspense, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BloodGroupProps } from '../types/types';

const loadIcon = (bloodGroup: string) => {
  console.log('bloodGroup', bloodGroup);
  switch (bloodGroup) {
    case 'A+':
      return import('@mui/icons-material/AddCircleOutline');
    case 'A-':
      return import('@mui/icons-material/RemoveCircleOutline');
    case 'B+':
      return import('@mui/icons-material/AddCircle');
    case 'B-':
      return import('@mui/icons-material/PlaylistAddCircle');
    case 'AB+':
      return import('@mui/icons-material/AddCircleOutline');
    case 'AB-':
      return import('@mui/icons-material/AddCircleOutline');
    case 'O+':
      return import('@mui/icons-material/AddCircleOutline');
    case 'O-':
      return import('@mui/icons-material/AddCircleOutline');
    default:
      return import('@mui/icons-material/HelpOutline');
  }
};

const BloodGroup: React.FC<BloodGroupProps> = ({ bloodGroup }) => {
  const [Icon, setIcon] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    loadIcon(bloodGroup).then((module) => setIcon(module.default));
  }, [bloodGroup]);

  return (
    <Suspense fallback={<CircularProgress />}>
      {Icon ? <Icon /> : null}
    </Suspense>
  );
};

BloodGroup.propTypes = {
  bloodGroup: PropTypes.string.isRequired,
};

export default BloodGroup;
