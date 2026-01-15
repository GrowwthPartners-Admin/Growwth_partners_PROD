import { useState, useEffect } from "react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { blogData } from "@/data/blog";
import { useNavigate, useLocation } from "react-router-dom";
import { useCountry } from "@/contexts/CountryContext";
import { useBlogPostsListing } from "@/hooks/useBlogPostsListing";
import { Calendar, ArrowRight } from "lucide-react";
import SEOhelper from "@/components/SEOhelper";
import { SubscribeForm } from "@/components/SubscribeForm";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const BlogPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getCountryUrl, country } = useCountry();
  const { posts, loading, error, refetch } = useBlogPostsListing(country);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("");
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const postsPerPage = 6;

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = (params.get("category") || "").replace(/\/+$/, "");
    setActiveCategory(category);
  }, [location.search]);

  const allCategories = blogData.categories;

  const filteredPosts = activeCategory
    ? posts.filter((post) => post.categories.includes(activeCategory))
    : posts;

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleCategoryClick = (category: string) => {
    if (activeCategory === category) {
      navigate(getCountryUrl("/blog"));
    } else {
      navigate(getCountryUrl(`/blog?category=${category}`));
    }
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleReadMore = (slug: string) => {
    navigate(getCountryUrl(`/blog/${slug}`));
  };

  const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Blog",
      "@id": "https://growwthpartners.com/blog/#blog",
      "name": "Growwth Partners Blog",
      "description": "Stay updated with expert insights and articles on payroll, finance, and SME growth in Singapore from Growwth Partners.",
      "url": "https://growwthpartners.com/blog",
      "publisher": {
        "@id": "https://growwthpartners.com/#organization"
      }
    },
    {
      "@type": "Organization",
      "@id": "https://growwthpartners.com/#organization",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": "jd@growwthpartners.com",
          "telephone": "+65 9861 5600",
          "contactType": "business",
          "areaServed": "SG"
        }
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "65 Chulia Street",
        "addressLocality": "Singapore",
        "postalCode": "049513",
        "addressCountry": "SG"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://growwthpartners.com/#localbusiness",
      "name": "Growwth Partners",
      "url": "https://growwthpartners.com",
      "description": "Professional accounting, bookkeeping, payroll, taxation, compliance, cash flow modelling, and CFO services in Singapore.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "65 Chulia Street",
        "addressLocality": "Singapore",
        "postalCode": "049513",
        "addressCountry": "SG"
      },
      "telephone": "+65 9861 5600"
    }
  ]
};


  if (loading) {
    return (
      <Layout>
        <SEOhelper
          title="Blog | Growwth Partners"
          description="Stay updated with expert insights and articles on payroll, finance, and SME growth in Singapore from Growwth Partners."
          keywords="business blog, financial insights, singapore business, accounting articles, startup advice"
          canonicalUrl="https://growwthpartners.com/blog"
          structuredData={structuredData}
        />

        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-64 bg-gray-200 rounded-xl mb-10"></div>
            <div className="flex flex-wrap gap-2 justify-center">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="h-10 w-24 bg-gray-200 rounded mb-2"
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array(6)
                .fill(0)
                .map((_, i) => (
                  <div key={i} className="h-80 bg-gray-200 rounded-lg"></div>
                ))}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <SEOhelper
        title="Blog | Growwth Partners"
        description="Stay updated with expert insights and articles on payroll, finance, and SME growth in Singapore from Growwth Partners."
        canonicalUrl="https://growwthpartners.com/blog"
        keywords="business blog, financial insights, singapore business, accounting articles, startup advice"
      />

      {error && (
        <div className="container mx-auto px-4 pt-4">
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-yellow-600">⚠️</span>
              <p className="text-sm text-yellow-800">{error}</p>
            </div>
            <Button onClick={() => refetch()} variant="outline" size="sm">
              Retry
            </Button>
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 py-12">
        <div
          className="relative mb-16 rounded-xl overflow-visible shadow-lg"
          style={{
            background: "#EBF1FE",
          }}
        >
          <div className="relative py-16 px-8 text-gray-900 text-center">
            <h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 tracking-tight"
              style={{
                fontFamily: `"Suisse Int'l", "Helvetica Neue", Arial, sans-serif`,
              }}
            >
              Grow Smarter with Insights from{" "}
              <span style={{ color: "#FB8136" }}>Growwth Partners</span>
            </h1>
            <p className="text-base md:text-lg max-w-4xl mx-auto font-normal mt-2 text-gray-800">
              Explore expert articles on financial management, accounting best
              practices, and business strategy designed to help you make smarter
              decisions and scale with confidence
            </p>
          </div>

          {/* Overlapping Subscribe Button */}
          <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 z-10">
            <Button
              onClick={() => setSubscribeModalOpen(true)}
              className="px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
              style={{ background: "#FB8136" }}
            >
              Subscribe for Weekly Insights
            </Button>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          <Button
            variant={!activeCategory ? "default" : "outline"}
            className="mb-2 shadow-sm transition-all hover:shadow rounded-xl"
            onClick={() => handleCategoryClick("")}
          >
            All
          </Button>
          {allCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className="mb-2 shadow-sm transition-all hover:shadow rounded-xl"
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {currentPosts.map((post) => (
            <Card
              key={post.slug}
              className="flex flex-col h-[352px] md:h-[385px] lg:h-[440px] overflow-hidden shadow-lg border border-gray-200 rounded-xl bg-[#EBF1FE] cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => handleReadMore(post.slug)}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.heroImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 pt-4 pb-0 flex flex-row items-center gap-2 text-sm text-gray-600">
                <Calendar size={16} className="mr-2" />
                <span>{post.publishDate}</span>
                <span className="mx-2">|</span>
                <span className="ml-1">By Jatin Detwani</span>
              </div>
              <CardHeader className="pb-1">
                <CardTitle className="line-clamp-2 text-xl font-bold">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardFooter className="mt-auto px-6 pb-6">
                <Button
                  variant="outline"
                  className="w-fit px-5 flex items-center gap-2 border-black border-2 hover:bg-black hover:text-white hover:border-black transition font-semibold capitalize rounded-2xl"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReadMore(post.slug);
                  }}
                >
                  Read More
                  <ArrowRight size={18} className="ml-1" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {currentPosts.length === 0 && (
          <div className="text-center py-12 border rounded-lg bg-gray-50">
            <p className="text-lg text-gray-600">
              No posts found for this category
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => handleCategoryClick("")}
            >
              View All Posts
            </Button>
          </div>
        )}

        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => handlePageChange(currentPage - 1)}
                  className={
                    currentPage === 1
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer hover:bg-gray-100"
                  }
                />
              </PaginationItem>
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink
                    isActive={currentPage === index + 1}
                    onClick={() => handlePageChange(index + 1)}
                    className="hover:bg-gray-100"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationNext
                  onClick={() => handlePageChange(currentPage + 1)}
                  className={
                    currentPage === totalPages
                      ? "pointer-events-none opacity-50"
                      : "cursor-pointer hover:bg-gray-100"
                  }
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>

      <Dialog open={subscribeModalOpen} onOpenChange={setSubscribeModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-orange-500">Subscribe to Our Newsletter</DialogTitle>
            <DialogDescription>
              Get weekly insights on financial management, accounting best practices, and business growth strategies delivered to your inbox.
            </DialogDescription>
          </DialogHeader>
          <SubscribeForm onSuccess={() => {
            setTimeout(() => setSubscribeModalOpen(false), 3000);
          }} />
        </DialogContent>
      </Dialog>
    </Layout>
  );
};

export default BlogPage;
