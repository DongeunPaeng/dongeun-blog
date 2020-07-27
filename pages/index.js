import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import PageLayout from "components/PageLayout";
import AuthorIntro from "components/AuthorIntro";
import CardListItem from "components/CardListItem";
import CardItem from "components/CardItem";
import FilteringMenu from "components/FilteringMenu";

import { getAllBlogs } from "lib/api";

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({
    view: { list: 0 },
  });
  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value });
        }}
      />
      <hr />
      <Row className="mb-5">
        {blogs.map((blog) =>
          filter.view.list ? (
            <Col key={`${blog.slug}-list`} md="10">
              <CardListItem
                author={blog.author}
                date={blog.date}
                image={blog.coverImage}
                title={blog.title}
                subtitle={blog.subtitle}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          ) : (
            <Col key={blog.slug} md="4">
              <CardItem
                author={blog.author}
                date={blog.date}
                image={blog.coverImage}
                title={blog.title}
                subtitle={blog.subtitle}
                link={{
                  href: "/blogs/[slug]",
                  as: `/blogs/${blog.slug}`,
                }}
              />
            </Col>
          )
        )}
      </Row>
    </PageLayout>
  );
}

export async function getStaticProps() {
  const blogs = await getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}
