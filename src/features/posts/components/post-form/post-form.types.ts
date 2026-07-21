export interface PostFormProps {
  tags: string[];
  post?: {
    title: string;
    body: string;
    tags: string[];
  };
}
