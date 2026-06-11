export type CampusRole =
  | "student"
  | "faculty"
  | "staff"
  | "parent"
  | "alumni"
  | "visitor"
  | "external_partner";

export type MyPawProfile = {
  id: string;
  email: string;
  preferredName?: string;
  campusRole: CampusRole;
};
