import Logo from "./logo";
import NextLink from "next/link";
import { HamburgerIcon, HumburgerIcon } from "@chakra-ui/icons";
import {
  useColorModeValue,
  Link,
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Menu,
  MenuButton,
  IconButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import ThemeToggleButon from "./theme-toggle-button";
import NoSsr from "./no-ssr";
import { motion } from "framer-motion";

const LinkItem = ({ href, path, children }) => {
  const active = path === href;
  const inactiveColor = useColorModeValue("gray200", "whiteAlpha.900");

  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "grassTeal" : undefined}
        color={active ? "#202023" : inactiveColor}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const containervariants = {
  hidden: {
    y: -20,
    opacity: 0,
  },

  show: {
    y: 0,
    opacity: 1,
  },
};

const AnimatedBox = motion(Box);

const Navbar = (props) => {
  const { path } = props;
  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing="tighter">
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, nmd: 0 }}
        >
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.5 }}
          >
            <LinkItem href="/projects" path={path} >
              Projects
            </LinkItem>
          </motion.div>

          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 4.6 }}
          >
            <LinkItem href="/contacts" path={path}>
              Contacts
            </LinkItem>
          </motion.div>
        </Stack>

        <AnimatedBox
          flex={1}
          justifyContent={"flex-end"}
          display={"flex"}
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 4.7 }}
        >
          <ThemeToggleButon />

          <Box ml={2} display={{ base: "inline-block", md: "none" }}>
            <NoSsr>
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<HamburgerIcon />}
                  variant="outline"
                  aria-label="Options"
                />

                <MenuList>
                  <NextLink href="/" passHref>
                    <MenuItem as={Link}>About</MenuItem>
                  </NextLink>
                  <NextLink href="/projects" passHref>
                    <MenuItem as={Link}>Projects</MenuItem>
                  </NextLink>
                  <NextLink href="/contacts" passHref>
                    <MenuItem as={Link}>Contacts</MenuItem>
                  </NextLink>
                </MenuList>
              </Menu>
            </NoSsr>
          </Box>
        </AnimatedBox>
      </Container>
    </Box>
  );
};
export default Navbar;
