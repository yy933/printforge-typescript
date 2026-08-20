import type { ReactNode, TransitionStartFunction } from "react";


// Data Types
export type Model = {
  id: number;
  name: string;
  description: string;
  likes: number;
  image: string;
  category: string;
  dateAdded: string;
};

export type Category = {
  name: string;
  slug: string;
};

export type CategoriesData = {
  categories: Category[];
};

export type GetModelsParams = {
  category?: string;
};

export type CategoryNamePageProps = {
  params: Promise<{
    categoryName: string;
  }>;
};

// Page Types
export type CategoryPageProps = {
  params: Promise<{
    categoryName: string;
  }>;
  searchParams: Promise<{
    sort?: string;
    q?: string;
  }>;
};

export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type ModelDetailPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export type ModelsPageProps = {
  searchParams: Promise<{
    q?: string;
    sort?: string;
  }>;
};

// Components Types
export type ModelCardProps = {
  model: Model;
};

export type ModelsGridProps = {
  models: Model[];
  categoryName?: string;
  search?: string;
  isPending: boolean;
  startTransition: TransitionStartFunction;
};

export type PillProps = {
  children: ReactNode;
  className?: string;
};

export type NavLinkProps = {
  href: string;
  children: ReactNode;
  isActive: boolean;
  className?: string;
};
