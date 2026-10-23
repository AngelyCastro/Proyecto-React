export interface Apartment {
 id: number;
 name: string;
 location: string;
 price: number; // precio mensual o de venta, decidir uno
 image: string; // ruta en /images/...
 description: string;
 bedrooms: number;
 bathrooms: number;
 area: number; // m²
 amenities: string[];
 featured: boolean; // para "propiedades destacadas" en Inicio
}