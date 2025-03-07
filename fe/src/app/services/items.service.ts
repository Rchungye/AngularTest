import { Injectable } from '@angular/core';
import { Item } from '../interfaces/item';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  itemList: Item[] = [
    {
      id_item: 1,
      name: 'Tocino',
      price: 12.99,
      description: 'Tocino fresco, ideal para freír o asar.',
      photo: '/items/tocino.png'
    },
    {
      id_item: 2,
      name: 'Arroz',
      price: 3.99,
      description: 'Arroz de grano largo, 1 kg.',
      photo: '/items/arroz.png'
    },
    {
      id_item: 3,
      name: 'Tomates Frescos',
      price: 2.75,
      description: 'Tomates frescos y jugosos, 500 g.',
      photo: '/items/tomate.png'
    },
    {
      id_item: 4,
      name: 'Aceite de Oliva Extra Virgen',
      price: 8.99,
      description: 'Aceite de oliva extra virgen, 500 ml.',
      photo: '/items/aceite_oliva.png'
    },
    {
      id_item: 5,
      name: 'Pechuga de Pollo',
      price: 10.50,
      description: 'Pechuga de pollo fresca, 1 kg.',
      photo: '/items/pechuga_pollo.png'
    },
    {
      id_item: 6,
      name: 'Pasta Espagueti',
      price: 2.30,
      description: 'Pasta espagueti, 500 g.',
      photo: '/items/pasta_espagueti.png'
    },
    {
      id_item: 7,
      name: 'Leche Entera',
      price: 1.50,
      description: 'Leche entera fresca, 1 litro.',
      photo: '/items/leche.png'
    },
    {
      id_item: 8,
      name: 'Huevos Frescos',
      price: 2.99,
      description: 'Caja de 12 huevos frescos.',
      photo: '/items/huevos.png'
    },
    {
      id_item: 9,
      name: 'Pan Integral',
      price: 2.50,
      description: 'Pan integral fresco, 500 g.',
      photo: '/items/pan.png'
    },
    {
      id_item: 10,
      name: 'Jugo de Naranja',
      price: 4.00,
      description: 'Jugo de naranja natural, 1 litro.',
      photo: '/items/naranja.png'
    }
  ];

  getAllItems(): Item[] {
    return this.itemList;
  }

  async getAllItemsById(id: number): Promise<Item | undefined> {
    return this.itemList.find((item) => item.id_item === id);
  }

}
