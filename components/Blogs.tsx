import { BlogProps } from "@/types";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";
import React from "react";
import Blog from "./Blog";

interface BlogsProps {
  data: BlogProps[];
}

const StyledBlogs = styled.div`
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 1em;
  justify-content: center;
`;

const Blogs = ({ data: blogs }: BlogsProps) => {
  return (
    <StyledBlogs>
      {blogs.map((blog: BlogProps) => (
        <Blog key={blog.id} {...blog} />
      ))}
    </StyledBlogs>
  );
};

export default Blogs;
