import { UserIF } from "./user.interface";

interface ProductIF {
  id_product: string | null;
  cod_product: string | null;
  name: string | null;
  model: string | null;
  brand: string | null;
  colors: string | null;
  liters: string | null;
  km: string | null;
  engine: string | null;
  description: string | null;
  weight: string | null;
  tires: string | null;
  purchase_price: number | null;
  sale_price: number | null;
  created_date: string | null;
  updated_date: string | null;
  status: boolean | null;
  user?: UserIF | null;
  user_id?: string | null;
}

export default ProductIF;
