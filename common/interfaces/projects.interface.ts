export interface IProject {
  id: number;
  name: string;
  subtitle: string;
  projectTextType: string;
  projectLocation: string;
  teamMembers: string;
  description: string;
  type: number;
  color: string;
  height: number;
  width: number;
  widthPercentage: number;
  aspectRatio: number;
  margin: string;
  previewImageUrl: string;
  projArrayImgUrl?: { url: string; name: string; isVideo?: boolean }[];
}
export interface ProjectProps {
  project: IProject | undefined;
}
