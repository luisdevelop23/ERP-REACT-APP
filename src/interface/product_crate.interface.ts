interface ProductCreateIF {
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
    status: boolean | null;
    id_user: string | null;
    type: string | null;
  }
  
  export default ProductCreateIF;
  