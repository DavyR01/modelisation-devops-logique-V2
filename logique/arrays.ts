const br = () => console.log("-------------------");

interface User {
   id: number;
   name: string;
   age: number;
   active: boolean;
}

// Filtrage des utilisateurs selon un état
function filterByProperty1(
   items: User[],
   property: keyof User,
   value: User[keyof User]
) {
   if (!Array.isArray(items)) {
      throw new TypeError("items must be an array");
   }

   if (typeof property !== "string" || property.trim() === "") {
      throw new TypeError("property must be a non-empty string");
   }

   if (items.length === 0) {
      return [];
   }

   return items.filter(item => {
      if (typeof item !== "object" || item === null) {
         throw new TypeError("each item must be an object");
      }

      if (!(property in item)) {
         return false;
      }

      return item[property] === value;
   });
}

const users: User[] = [
   { id: 1, name: 'Alice', age: 25, active: true },
   { id: 2, name: 'Bob', age: 30, active: false },
   { id: 3, name: 'Charlie', age: 35, active: true }
];

console.log(filterByProperty1(users, 'active', true)); br()
// [{ id: 1, name: 'Alice', age: 25, active: true }, { id: 3, name: 'Charlie', age: 35, active: true }]






interface Product {
   id: number;
   name: string;
   category: string;
   price: number;
}

// Regroupement des produits par catégorie
function groupBy1(items: Product[], property: keyof Product) {
   if (!Array.isArray(items)) {
      throw new TypeError("items must be an array");
   }

   if (typeof property !== "string" || property.trim() === "") {
      throw new TypeError("property must be a non-empty string");
   }

   const result: Record<string, Product[]> = {};

   if (items.length === 0) {
      return result;
   }

   for (const item of items) {
      if (typeof item !== "object" || item === null) {
         throw new TypeError("each item must be an object");
      }

      if (!(property in item)) {
         continue;
      }

      const key = String(item[property]);

      if (!result[key]) {
         result[key] = [];
      }

      result[key].push(item);
   }

   return result;
}

const products: Product[] = [
   { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
   { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
   { id: 3, name: 'T-shirt', category: 'Clothing', price: 29 }
];

console.log(groupBy1(products, 'category')); br()
// { Electronics: [...], Clothing: [...] }
