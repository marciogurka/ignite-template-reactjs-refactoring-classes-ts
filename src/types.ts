export interface Food {
  id?: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodInput {
  name: string;
  image: string;
  description: string;
}
