type BreadcrumbItem = {
  name: string;
  item: string;
};

type Props = {
  items: BreadcrumbItem[];
};

const BreadcrumbStructuredData = ({ items }: Props) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default BreadcrumbStructuredData;
