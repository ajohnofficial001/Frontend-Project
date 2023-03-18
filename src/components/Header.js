import React, { useEffect, useRef, useState } from "react";
import { Box, HStack, Image } from "@chakra-ui/react";
import Logo from "../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
  const lastPosition = useRef(window.scrollY);
  const [transform, setTransform] = useState(null);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const currentPosition = window.pageYOffset;

      if (lastPosition.current > currentPosition) {
        setTransform("translateY(0)");
      } else {
        setTransform("translateY(-200px)");
      }
      lastPosition.current = currentPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={transform}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#fff"
      zIndex="100"
    >
      <Box color="black" maxWidth="1280px" margin="0 auto">
        <HStack
          px={20}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <Image src={Logo} alt="logo" />
          </nav>
          <nav>
            <HStack spacing={8}>
              <Link to="/">Home</Link>
              <Link to="/#about" onClick={handleClick}>
                About
              </Link>
              <Link to="/#projects-section" onClick={handleClick}>
                Menu
              </Link>
              <Link to="/booking">Reservations</Link>
              <Link to="/#projects-section" onClick={handleClick}>
                Order Online
              </Link>
              <Link to="/#contactme-section" onClick={handleClick}>
                Login
              </Link>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
