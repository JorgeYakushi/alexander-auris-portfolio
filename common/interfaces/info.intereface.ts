export interface IInfo {
  education: { year: number; text: string; extra: string | null }[];
  experience: { range: string; text: string }[];
  academic: { year: number; text: string }[];
  lectures: { year: number; text: string }[];
  exhibitions: { year: number; text: string }[];
  publications: { year: number; text: string }[];
  recognitions: { year: number; text: string }[];
}
// TODO AGREGAR CONTACT Y BODY
