export type LittleImageCardProps = {
  titler: {
    title: string;
    description: string;
  };
  photo: string;
  button?: {
    title: string;
    onClick: () => void;
  };
};
