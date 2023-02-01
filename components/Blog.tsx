import { BlogProps } from "@/types";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

const StyledBox = styled.div`
  box-shadow: 2px 2px 8px 0 rgba(0, 0, 0, 0.2);
  width: 400px;
  padding: 0.6em;
  border-radius: 8px;
  @media (max-width: 768px) {
    width: 350px;
  }
  @media (max-width: 640px) {
    width: 300px;
  }
`;

const Blog = ({ userId, title, body, id }: BlogProps) => {
  return (
    <StyledBox>
      <Typography variant="body2">{userId}</Typography>

      <Link href={`/${id}`}>
        <Typography variant="h6" fontWeight="bold">
          {title}
        </Typography>
      </Link>
      <Typography variant="body2">{body}</Typography>
    </StyledBox>
  );
};

export default Blog;
