import React from 'react';

// BEN SAYS: NO IMPLICIT ANY
interface Props {
  url: string;
  className?: string;
  variant: 'regular' | 'dark';
  children: React.ReactNode;
}

// this is also a valid way to add types:
// type LinkProps = {
//   url: string;
//   className?: string;
//   children: React.ReactNode;
// }

const Link = ({ url, variant, className, children }: Props) => {
  const hasHyphen = className?.includes('-') ?? false;

  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      href={url}
    >
      {children}
    </a>
  );
};

export default Link;
