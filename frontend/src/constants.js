export const ZONE = [
  { value: "grill", label: "Grill" },
  { value: "cuptor", label: "Cuptor" },
  { value: "desert", label: "Desert" },
];

export const ETICHETE_ZONA = Object.fromEntries(
  ZONE.map((z) => [z.value, z.label])
);