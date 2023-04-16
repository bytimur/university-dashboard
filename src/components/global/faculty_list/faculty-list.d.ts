export type FacultyListProps = {
  button: {
    title: string;
    onClick: () => void;
  };
  studentQuantity: {
    title: string;
    count: number;
  };
  directionList: {
    id: number;
    name: string;
    student: {
      title: string;
      count: number;
    };
    quota: {
      title: string;
      count: number;
    };
    competition: {
      title: string;
      count: number;
    };
  }[];
};
