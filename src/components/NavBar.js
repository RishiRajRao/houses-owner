import { Box, Flex, Image, Center } from '@chakra-ui/react';

import siteLogo from '../assets/logo.png';

// const NavLink = (props) => {
//   const { children } = props;

//   return (
//     <Box
//       as="a"
//       px={2}
//       py={1}
//       rounded={'md'}
//       _hover={{
//         textDecoration: 'none',
//         bg: useColorModeValue('gray.200', 'gray.700'),
//       }}
//       href={'#'}
//     >
//       {children}
//     </Box>
//   );
// };

export default function Nav() {
  return (
    <>
      <Box px={4}>
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            {' '}
            <Center>
              <Image maxWidth={'200px'} objectFit="cover" src={siteLogo} />
            </Center>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
