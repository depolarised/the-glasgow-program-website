"use client";

import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { navigation, siteConfig } from "@/lib/constants";

export function Footer() {
  return (
    <footer id="footer" className="border-t border-border bg-background-alt scroll-mt-20">
      <div className="section-container py-12 lg:py-16">
        {/* University of Glasgow Logo */}
        <div className="mb-10 pb-8 border-b border-border">
          <a
            href={siteConfig.links.universityMain}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block hover:opacity-80 transition-opacity"
            aria-label="University of Glasgow"
          >
            <Image
              src="/images/uofg-logo.svg"
              alt="University of Glasgow"
              width={280}
              height={84}
              className="h-20 w-auto"
            />
          </a>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold text-foreground"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary-muted">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-primary"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
              {siteConfig.shortName}
            </Link>
            <p className="mt-4 max-w-sm text-sm text-foreground-muted">
              Part of the {siteConfig.department}, {siteConfig.school}, {siteConfig.institution}.
            </p>

            {/* Address */}
            <address className="mt-6 space-y-1 text-sm text-foreground-muted not-italic">
              <p className="font-medium text-foreground">Electrocardiology Section</p>
              <p>{siteConfig.address.building}</p>
              <p>{siteConfig.address.street}</p>
              <p>{siteConfig.address.city} {siteConfig.address.postcode}</p>
              <p>{siteConfig.address.country}</p>
            </address>

            <div className="mt-4 text-sm">
              <a
                href="mailto:peter.macfarlane@glasgow.ac.uk"
                className="text-foreground-muted hover:text-primary transition-colors"
              >
                peter.macfarlane@glasgow.ac.uk
              </a>
            </div>
          </div>

          {/* Navigation Columns */}
          {navigation.footer.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-foreground">
                {column.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {column.links.map((link) => {
                  const isExternal = 'external' in link && link.external;

                  if (isExternal) {
                    return (
                      <li key={link.href}>
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-foreground-muted hover:text-primary transition-colors"
                        >
                          {link.name}
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </li>
                    );
                  }

                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-foreground-muted hover:text-primary transition-colors"
                      >
                        {link.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-foreground-muted">
            &copy; {new Date().getFullYear()} {siteConfig.institution}. Electrocardiology Section.
          </p>
          <div className="flex gap-6 text-xs text-foreground-muted">
            <a
              href="https://www.gla.ac.uk/legal/privacy/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Privacy
            </a>
            <a
              href="https://www.gla.ac.uk/legal/accessibility/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
