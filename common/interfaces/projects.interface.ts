export interface IProject {
  id: number;
  name: string;
  subtitle: string;
  type: number;
  color: string;
  size: string;
  previewImageUrl: string;
  projArrayImgUrl?: string[];
  description: string;
}
export interface ProjectProps {
  project: IProject | undefined;
}
