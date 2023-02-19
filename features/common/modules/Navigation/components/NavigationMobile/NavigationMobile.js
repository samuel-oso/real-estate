import {
  Box,
  Flex,
  Text,
  IconButton,
  Menu,
  MenuList,
  MenuButton,
  MenuItem,
} from "@chakra-ui/react";
import { HiHomeModern } from "react-icons/hi2";
import Link from "next/link";
import { navigationLinks } from "../../navigationConsts";
import { HamburgerIcon } from "@chakra-ui/icons";

const NavigatonMobile = () => {
  return (
    <Box
      color="blue.600"
      padding="2rem"
      backgroundColor="white"
      display={{ base: "block", md: "none" }}
    >
      <Flex alignItems="center" justifyContent="space-between">
        <Link href="/">
          <Box display="flex" gap="2" alignItems="center">
            <HiHomeModern size="30px" />
            <Text fontSize="2xl" fontWeight="black">
              HOMEY
            </Text>
          </Box>
        </Link>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {navigationLinks.map((item) => {
              return <NavigationLink key={item.title} {...item} />;
            })}
          </MenuList>
        </Menu>
      </Flex>
    </Box>
  );
};

export default NavigatonMobile;

const NavigationLink = ({ title, link, icon }) => {
  return (
    <Link href={link}>
      <MenuItem alignItems="center" gap="0.5rem">
        {icon}
        {title}
      </MenuItem>
    </Link>
  );
};
