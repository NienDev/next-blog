import Blog from "@/components/Blog";
import Navbar from "@/components/Navbar";
import { BlogProps } from "@/types";
import { fetchBlogsData } from "@/utils";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

interface IDBlogPageProps {
  blog: BlogProps;
}

const IDBlogPage = ({ blog }: IDBlogPageProps) => {
  console.log(blog);
  return (
    <>
      <Navbar />
      <Box
        sx={{
          marginTop: "1em",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Blog {...blog} />
      </Box>
    </>
  );
};

export default IDBlogPage;

export async function getStaticProps(context: any) {
  const { params } = context;
  const blogs: BlogProps[] = await fetchBlogsData();
  const lookupBlog = blogs.find((blog) => blog.id == params.id);
  return {
    props: {
      blog: lookupBlog,
    },
  };
}

export async function getStaticPaths() {
  const blogs: BlogProps[] = await fetchBlogsData();
  const paths = blogs.map((blog: BlogProps) => ({
    params: {
      id: blog.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
}
