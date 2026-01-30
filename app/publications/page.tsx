import type { Metadata } from "next";
import Link from "next/link";
import { ExternalLink, BookOpen, FileText, ArrowRight } from "lucide-react";
import { Button, SectionHeading } from "@/components/ui";
import { keyPublications, books, externalResources } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Research publications from the University of Glasgow Electrocardiology Section — 424 publications with h-index 77.",
};

// Additional publications beyond the key ones (grouped by category)
const publicationCategories = [
  {
    title: "Glasgow Program",
    description: "Research describing the methodology and validation of the automated ECG interpretation system.",
    publications: [
      {
        title: "STEMI Screening Performance with an Updated University of Glasgow ECG Analysis Program",
        journal: "J Electrocardiol",
        year: 2023,
      },
      {
        title: "Factors Influencing Automated Limited Lead Detection of Atrial Fibrillation",
        journal: "J Electrocardiol",
        year: 2020,
      },
      {
        title: "Comparison of automated interval measurements by widely used algorithms",
        journal: "J Electrocardiol",
        year: 2018,
      },
      {
        title: "Early repolarization patterns and J-wave classifications",
        journal: "J Electrocardiol",
        year: 2015,
      },
      {
        title: "Racial differences in ECG measurements",
        journal: "J Electrocardiol",
        year: 2014,
      },
    ],
  },
  {
    title: "Clinical Trials & Epidemiology",
    description: "Publications from clinical trials and epidemiological studies supported by the ECG Core Lab.",
    publications: [
      {
        title: "West of Scotland Coronary Prevention Study (WOSCOPS)",
        journal: "NEJM",
        year: 1995,
        note: "Landmark statin primary prevention trial",
      },
      {
        title: "Metabolic syndrome and cardiovascular disease outcomes",
        journal: "Circulation",
        year: 2010,
      },
      {
        title: "Atrial fibrillation detection post-stroke",
        journal: "Lancet Neurol",
        year: 2018,
      },
      {
        title: "QT interval determinants in population studies",
        journal: "Heart",
        year: 2015,
      },
      {
        title: "The PROSPER study (pravastatin in elderly patients)",
        journal: "Lancet",
        year: 2002,
      },
    ],
  },
  {
    title: "Methodology & Standards",
    description: "Research into ECG recording techniques, electrode placement, and measurement standards.",
    publications: [
      {
        title: "Precordial electrode placement in women",
        authors: "Macfarlane PW, Coleman EN et al.",
        journal: "J Electrocardiol",
        year: 2008,
        url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC2499893/",
      },
      {
        title: "Effects of age, sex, and race on ECG interval measurements",
        journal: "J Electrocardiol",
        year: 1994,
        pmid: "7884351",
      },
      {
        title: "Methods for improving the repeatability of automated ECG analysis",
        journal: "J Electrocardiol",
        year: 1995,
        pmid: "7666806",
      },
    ],
  },
];

export default function PublicationsPage() {
  return (
    <main className="pt-20 lg:pt-24">
      {/* Header */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Publications
            </h1>
            <p className="mt-6 text-xl text-foreground-muted">
              Research from the Electrocardiology Section has been published in
              leading peer-reviewed journals including Nature Communications,
              Circulation, The Lancet, and the Journal of Electrocardiology.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <div className="text-3xl font-bold text-primary">424</div>
                <div className="text-sm text-foreground-muted">
                  Publications
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">77</div>
                <div className="text-sm text-foreground-muted">
                  h-index
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">53K+</div>
                <div className="text-sm text-foreground-muted">
                  Citations
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4</div>
                <div className="text-sm text-foreground-muted">
                  Edited book volumes
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Books & E-books
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {books.map((book) => (
              <div
                key={book.title}
                className="p-6 rounded-lg border border-border bg-background"
              >
                <h3 className="font-semibold text-foreground">{book.title}</h3>
                <p className="mt-2 text-sm text-foreground-muted">
                  Edited by {book.editors}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-foreground-muted">
                  <span>{book.publisher}</span>
                  {book.edition && <span>{book.edition}</span>}
                </div>
                {'note' in book && book.note && (
                  <p className="mt-2 text-sm text-foreground-muted italic">{book.note}</p>
                )}
                {book.url && (
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm text-primary hover:underline"
                  >
                    View on Springer
                    <ExternalLink className="h-3 w-3" />
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Publications */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="Key Publications"
            subtitle="Foundational papers describing the methodology and validation of the Glasgow Program."
          />

          <div className="mt-12 space-y-4">
            {keyPublications.map((pub) => (
              <div
                key={pub.title}
                className="p-6 rounded-lg border border-border bg-surface hover:border-primary transition-colors"
              >
                <div className="flex items-start gap-4">
                  <FileText className="h-5 w-5 text-primary shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">
                      {pub.title}
                    </h3>
                    <p className="mt-1 text-sm text-foreground-muted">
                      {pub.authors}
                    </p>
                    <p className="text-sm text-foreground-muted">
                      <span className="italic">{pub.journal}</span>, {pub.year}
                      {pub.pmid && (
                        <span className="ml-2">PMID: {pub.pmid}</span>
                      )}
                    </p>
                    {pub.note && (
                      <p className="mt-2 text-sm text-primary">{pub.note}</p>
                    )}
                  </div>
                  {pub.url && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 px-3 py-1 text-sm border border-border rounded hover:border-primary hover:text-primary transition-colors flex items-center gap-1"
                    >
                      View
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Categories */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <SectionHeading
            title="Research Areas"
            subtitle="Publications organised by research focus area."
          />

          <div className="mt-12 space-y-12">
            {publicationCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-lg font-semibold text-foreground">
                  {category.title}
                </h3>
                <p className="mt-1 text-sm text-foreground-muted mb-6">
                  {category.description}
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  {category.publications.map((pub) => (
                    <div
                      key={pub.title}
                      className="p-4 rounded-lg border border-border bg-background"
                    >
                      <h4 className="font-medium text-foreground text-sm">
                        {pub.title}
                      </h4>
                      <p className="mt-1 text-xs text-foreground-muted">
                        <span className="italic">{pub.journal}</span>,{" "}
                        {pub.year}
                      </p>
                      {'note' in pub && pub.note && (
                        <p className="mt-1 text-xs text-primary">{pub.note}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* External Resources */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="section-container">
          <SectionHeading
            title="External Resources"
            subtitle="Professional organisations and educational resources related to electrocardiology."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {externalResources.map((category) => (
              <div key={category.category}>
                <h3 className="font-semibold text-foreground mb-4">
                  {category.category}
                </h3>
                <ul className="space-y-3">
                  {category.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-foreground-muted hover:text-primary transition-colors"
                      >
                        {link.name}
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 lg:py-20 bg-surface">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Research Collaboration
            </h2>
            <p className="mt-4 text-foreground-muted">
              For enquiries about research collaboration or access to
              publications, please contact the Electrocardiology Section.
            </p>
            <div className="mt-8">
              <Link href="/contact">
                <Button>
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
