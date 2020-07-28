import PageLayout from "components/PageLayout";
import BlogHeader from "components/BlogHeader";
import BlogContent from "components/BlogContent";
import { getBlogBySlug, getAllBlogs } from "lib/api";
import { Row, Col } from "react-bootstrap";
import { urlFor } from "lib/api";
import moment from "moment";

const BlogDetail = ({ blog }) => {
  return (
    <PageLayout className="blog-detail-page">
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            title={blog.title}
            subtitle={blog.subtitle}
            date={moment(blog.date).format("LLL")}
            author={blog.author}
            coverImage={urlFor(blog.coverImage).height(600)}
          />
          <hr />
          {blog.content && <BlogContent content={blog.content} />}
        </Col>
      </Row>
    </PageLayout>
  );
};

export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug);
  return {
    props: { blog },
  };
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs();
  const paths = blogs?.map((blog) => ({
    params: {
      slug: blog.slug,
    },
  }));
  return { paths, fallback: false };
}

export default BlogDetail;
