import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ExternalLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: ReactNode;
}

/** External link that always opens safely in a new tab. */
export function ExternalLink({
  href,
  children,
  ...rest
}: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
      {children}
    </a>
  );
}
