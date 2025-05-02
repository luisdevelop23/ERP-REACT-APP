export interface UserIF {
  id_user?: string | null;
  name?: string | null;
  surnames?: string | null;
  dni?: string | null;
  user_name?: string | null;
  password?: string | null;
  email?: string | null;
  img_profile?: string | null;
  id_role?: string | null;
  created_date: Date | null;
  updated_date?: Date | null;
  status?: boolean | null;
}
