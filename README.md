# SamaBikes 🏍️

Tienda online de motocicletas y equipamiento desarrollada con React y Vite. Permite explorar un catálogo de motos y accesorios, ver el detalle de cada producto, gestionar un carrito de compras y enviar consultas de contacto.

---

## Tecnologías

- **React 19** — UI con hooks y Context API
- **React Router DOM v7** — Navegación SPA con rutas anidadas
- **Vite 8** — Bundler y servidor de desarrollo
- **CSS Modules** — Estilos encapsulados por componente
- **ESLint** — Linting con reglas para React Hooks y React Refresh

---

## Estructura del proyecto

```
src/
├── App.jsx                  # Raíz de la app (BrowserRouter + CartProvider)
├── main.jsx                 # Entry point
├── routes/
│   └── AppRoutes.jsx        # Definición de rutas con AppLayout como layout raíz
├── layouts/
│   └── AppLayout.jsx        # Layout compartido (Header + Outlet + Footer)
├── pages/
│   ├── HomePage.jsx         # Productos destacados
│   ├── BikesPage.jsx        # Catálogo de motos
│   ├── EquipmentPage.jsx    # Catálogo de equipamiento
│   ├── CartPage.jsx         # Carrito de compras
│   ├── ContactPage.jsx      # Página de contacto
│   └── ProductDetailPage.jsx# Vista detallada de un producto
├── Containers/
│   ├── Main/                # Lista de destacados
│   ├── Bikes/               # Lista de motos
│   ├── Equipment/           # Lista de equipamiento
│   └── Contact/             # Formulario de contacto
├── components/
│   ├── Header/              # Encabezado con logo y navegación
│   ├── Navbar/              # Links de navegación + contador del carrito
│   ├── Footer/              # Pie de página con equipo de asesores
│   ├── ProductCard/         # Tarjeta de producto con favoritos y carrito
│   ├── ProductDetails/      # Vista detallada de producto
│   ├── ContactForm/         # Formulario de consulta
│   └── ui/                  # Componentes reutilizables (skeletons, spinners, etc.)
├── contexts/
│   └── cart/                # CartContext + CartProvider (useReducer)
├── hooks/
│   ├── useCart.js           # Acceso al contexto del carrito
│   ├── useProducts.js       # Carga y búsqueda de productos
│   └── usePeople.js         # Carga de asesores
├── services/
│   └── productsService.js   # Fetch de productos con caché y deduplicación
└── utils/
    ├── catalog.js           # Constantes (URLs, delays, límites)
    ├── routes.js            # Rutas y helpers de paths
    ├── contactStorage.js    # Persistencia de consultas en localStorage
    └── delay.js             # Helpers para delays simulados
```

---

## Rutas

| Path              | Página               |
|-------------------|----------------------|
| `/`               | Destacados           |
| `/motos`          | Catálogo de motos    |
| `/equipamiento`   | Equipamiento         |
| `/contacto`       | Formulario contacto  |
| `/carrito`        | Carrito              |
| `/producto/:id`   | Detalle de producto  |

---

## Datos

Los productos y asesores se cargan desde archivos JSON estáticos ubicados en `public/data/`:

- `products.json` — Catálogo con secciones `bikes` y `equipment`
- `people.json` — Lista de asesores mostrados en el Footer

El servicio de productos incluye caché en memoria y deduplicación de requests simultáneos.

---

## Carrito

El estado del carrito se maneja con `useReducer` a través de un Context global (`CartProvider`). Soporta:

- Agregar y quitar unidades por producto
- Establecer cantidad exacta (`setQuantity`)
- Consultar cantidad de un producto (`getQuantity`)
- Vaciar el carrito completo (`clearCart`)

---

## Instalación y uso

### Requisitos

- Node.js 18+
- npm 9+

### Pasos

```bash
# Clonar el repositorio
git clone <url-del-repo>
cd SamaBikes

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

### Scripts disponibles

| Comando         | Descripción                        |
|-----------------|------------------------------------|
| `npm run dev`   | Servidor de desarrollo con HMR     |
| `npm run build` | Build de producción en `/dist`     |
| `npm run preview` | Preview del build de producción  |
| `npm run lint`  | Análisis estático con ESLint       |

---

## © 2026 SamaBikes — Todos los derechos reservados.
