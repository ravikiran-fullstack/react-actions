import Box from '@mui/material/Box';
import { styled } from '@mui/material';
import PropTypes from 'prop-types';
import BloodGroup from './BloodGroup';

const StyledBox = styled(Box)(({theme}) => ({
  p: 2,
  boxShadow: '4px 4px 8px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#E0E0E0',
  '&:hover': {
    backgroundColor: '#FFFFFF',
  },
  cursor: 'pointer',
  padding: '20px',
}))

const CenteredDiv = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const StyledHr = styled('hr')`
  background-color: ${(props) => props.theme.colors.secondary};
  height: 1px;
  border: 0;
  margin: 0;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const Card = ({ firstName, lastName, hairColor, bloodGroup }) => {

  return (
    <StyledBox component="section">
      <div>
        {firstName}: {lastName}
      </div>
      <StyledHr />
      <CenteredDiv>
        <div style={{ margin: '10px' }}>Hair Color: {hairColor}</div>
        <div style={{ color: 'red', margin: '10px', display:'flex' }}>
          <div>Blood Group:</div>
          <BloodGroup bloodGroup={bloodGroup} />
        </div>
      </CenteredDiv>
    </StyledBox>
  );
};

Card.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  hairColor: PropTypes.string.isRequired,
  bloodGroup: PropTypes.string.isRequired,
};

export default Card;
