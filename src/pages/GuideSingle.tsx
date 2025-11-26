import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { useGuides } from "@/hooks/useGuides";
import GuideDetail from "./GuideDetail";
import { Head } from "vite-react-ssg";

const GuideSinglePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { guides, loading, error } = useGuides();
  const guide = guides.find((g) => g.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContactClick = () => {
    window.location.href = "/contact-us";
  };

  if (loading) {
    return (
      <Layout>
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-red-500">Error</h2>
          <p className="mt-4">{error}</p>
        </div>
      </Layout>
    );
  }

  if (!guide) {
    return (
      <Layout>
        <Head>
          <title>404 - Guide Not Found | Growwth Partners</title>
          <meta name="robots" content="noindex, nofollow" />
          <meta
            name="description"
            content="The guide you're looking for doesn't exist."
          />
        </Head>
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold">Guide Not Found</h2>
          <p className="mt-4">The guide you're looking for doesn't exist.</p>
        </div>
      </Layout>
    );
  }

  return (
    <>
      {/* Seo now in GuideDetail */}
      <GuideDetail guide={guide} onContactClick={handleContactClick} />
    </>
  );
};

export default GuideSinglePage;
