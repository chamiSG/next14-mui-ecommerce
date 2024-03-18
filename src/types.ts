export interface LayoutProps {
  children: React.ReactElement;
  active: string;
  window?: () => Window;
}

export type ServiceCardType = {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export type PageType = {
  href: string;
  name: string;
};

export type Product = {
  id: number,
  title: string,
  description: string,
  price: number,
  discountPercentage: number,
  rating: number,
  stock: number,
  brand: string,
  category: string,
  thumbnail: string,
  images: string[]
}

export type LineItem = {
  pId: number,
  name: string,
  price: number,
  quantity: number,
  thumbnail: string
}

export type Cart = {
  lineItems: LineItem[]
}
