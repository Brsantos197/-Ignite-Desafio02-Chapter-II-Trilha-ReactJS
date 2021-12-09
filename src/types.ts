export interface FoodType {
  id: number;
  name: string;
  description: string;
  price: string;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodType;
  handleEditFood: (arg0: FoodType) => {};
  handleDelete: () => {};
}
