export type ImageUploadProps = {
  name: string;
  initialImage?: string;
  onChange: (image_id: number, name: string) => void;
  titler: {
    title: string;
    description: string;
  };
  error?: string;
};
