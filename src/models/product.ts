
class ProductModel {
    public alive: boolean;
    public category: { _id: string, description: string, icon: string };
    public description: string;
    public image: string;
    public name: string;
    public order: number;
    public price: number;
    public _id: string;
}

export default ProductModel;
