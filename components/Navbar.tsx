import styled from "@emotion/styled";
import { Book, Bookmark } from "@mui/icons-material";
import { AppBar, Toolbar, Box } from "@mui/material";
import Link from "next/link";
import Search from "./Search";

const StyledToolbar = styled.nav`
  display: flex;
  gap: 1em;
  padding: 0.5em 1em;
`;

const StyledLinks = styled.ul`
  display: flex;
  gap: 1em;
`;

const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ top: 0 }}>
        <StyledToolbar>
          <Box display="flex" justifyContent="center" gap={1}>
            <Book />
            <span>Everyone Blog</span>
          </Box>
          <Box flexGrow={1}>
            <Search />
          </Box>
          <StyledLinks>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/">Your Blog</Link>
            </li>
            <li>
              <Link href="/">
                <Bookmark />
              </Link>
            </li>
          </StyledLinks>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
