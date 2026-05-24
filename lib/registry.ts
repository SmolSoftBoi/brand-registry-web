export type BrandColour = {
  name: string;
  hex: string;
  role: string;
  confidence: string;
};

export type Brand = {
  name: string;
  slug: string;
  domain?: string;
  status: string;
  lastCheckedAt?: string;
  lastVerifiedAt?: string;
  colours: BrandColour[];
};

const starterBrands: Brand[] = [
  {
    name: "Example Brand",
    slug: "example",
    domain: "example.com",
    status: "candidate",
    lastCheckedAt: "2026-05-24",
    colours: [
      {
        name: "Example Primary",
        hex: "#3366FF",
        role: "primary",
        confidence: "community",
      },
    ],
  },
];

export async function getBrands(): Promise<Brand[]> {
  // MVP placeholder: replace with generated registry package, GitHub raw JSON, or database read model.
  return starterBrands;
}
