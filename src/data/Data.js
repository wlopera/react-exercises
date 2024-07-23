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
];

const getValues = (max) => {
  const numbers = [];
  for (let i = 0; i < max; i++) {
    numbers.push(i);
  }
  return numbers;
};

export const NUMBERS = getValues(32);
