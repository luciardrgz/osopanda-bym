export interface simpleProductCard {
    productName: string;
    productPrice: number;
    productCategory: string;
    productSmallDescription: string;
    productLongDescription: any;
    productSlug: string;
    productImage: any;
    productFabricPrints: FabricPrint[];
}

export interface FabricPrint {
    fabricPrintName: string;
    fabricPrintSlug: string;
    fabricPrintImg: any;
}