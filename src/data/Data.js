export const menuData = [
  {
    key: "image-component",
    name: "Componente de imágenes",
    component: "/image/component",
  },
  {
    key: "matriz-number",
    name: "Matrices",
    component: "/matriz/number",
  },
  {
    key: "useEffect-update-state",
    name: "Actualizar estado x accesorios o estado",
    component: "/useEfect/update/state",
  },
  {
    key: "useEffect-init-app",
    name: "UseEffect - Inicializando la APP",
    component: "/useEfect/init/app",
  },
  {
    key: "tasks-app",
    name: "Agregar Tareas",
    component: "/tasks/app",
  },
];

const getValues = (max) => {
  const numbers = [];
  for (let i = 0; i < max; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const NUMBERS = getValues(32);
