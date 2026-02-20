
export interface Category {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  alt: string;
}

export interface GalleryItem {
  id: string;
  imageUrl: string;
  alt: string;
  aspect: 'portrait' | 'square';
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatarUrl: string;
}

export interface NavItem {
  label: string;
  href: string;
}
