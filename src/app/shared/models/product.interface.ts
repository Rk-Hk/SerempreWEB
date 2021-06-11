export interface IProduct {
    name: string,
    description: string,
    price : string,
    overview: string,
    images: Array<string>,
    specifications: Array<ISpecifications>
}

export interface ISpecifications {
    key: string,
    value: string
}