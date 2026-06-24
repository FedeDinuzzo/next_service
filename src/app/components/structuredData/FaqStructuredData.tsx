type FaqItem = {
  question: string;
  answer: string;
};

type Props = {
  pageUrl: string;
  items: FaqItem[];
};

const FaqStructuredData = ({ pageUrl, items }: Props) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
    url: pageUrl,
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
};

export default FaqStructuredData;
