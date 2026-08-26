import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";

export default function Navigation() {
  const router = useRouter();

  return (
    <StyledNavigation>
      <StyledList>
        <StyledListItem>
          <StyledLink href="/" $isActive={router.pathname === "/"}>
            Spotlight
          </StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledLink
            href="/gallery"
            $isActive={router.pathname === "/gallery"}
          >
            Gallery
          </StyledLink>
        </StyledListItem>

        <StyledListItem>
          <StyledLink
            href="/favourites"
            $isActive={router.pathname === "/favourites"}
          >
            Favourites
          </StyledLink>
        </StyledListItem>
      </StyledList>
    </StyledNavigation>
  );
}

const StyledNavigation = styled.nav`
  display: flex;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4em;
  background-color: var(--background-color-primary);
  z-index: 1000;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  flex-grow: 1;
  height: 100%;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--text-color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover {
    background-color: var(--background-color-secondary);
    color: var(--text-color-hover);
    text-decoration: underline;
  }
`;
