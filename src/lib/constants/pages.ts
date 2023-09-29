export const PAGES = [
  { name: 'About', href: '/', type: 'relative' },
  { name: 'Projects', href: '/projects', type: 'relative' },
  { name: 'Skills', href: '/skills', type: 'relative' },
  { name: 'Blog', href: 'https://abhay.rs/blog', target: "_blank", type: 'external' },
  { name: 'Resume', href: 'https://docs.google.com/document/d/1-gbj0lrWHx3foaCjtzu456TVz-x-HVl3W9SlbZRPhkw/export?format=pdf', download: "", type: 'download' },
] satisfies {
  name: string;
  href: string;
  type: 'relative' | 'external' | 'download';
  [key: string]: any;
}[]
