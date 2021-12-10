import { ReactNode } from "react";

export interface FoodType {
  id: number;
  name: string;
  description: string;
  price: number;
  available: boolean;
  image: string;
}

export interface FoodProps {
  food: FoodType;
  handleEditFood: (arg0: FoodType) => void;
  handleDelete: (arg0: number) => void;
}

export interface ModalProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children?: ReactNode;
}
