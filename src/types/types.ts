export interface LineOfBusiness {
  firstName: string;
  lastName: string;
  hair: {
    color: string;
  };
  bloodGroup: string;
}

export interface CardObj {
  firstName: string;
  lastName: string;
  hairColor: string;
  bloodGroup: string;
}

export interface BloodGroupProps {
  bloodGroup: string; // Assuming bloodGroup is a string, adjust the type as necessary
}
