
  import { Forklift,Antenna,Activity,DatabaseZap ,University ,HardHat ,ChevronDown} from 'lucide-react';
  import { Image } from '@mantine/core';

  import {
    Anchor,
    Box,
    Burger,
    Center,
    Collapse,
    Divider,
    Drawer,
    Group,
    HoverCard,
    ScrollArea,
    SimpleGrid,
    Text,
    ThemeIcon,
    UnstyledButton,
    useMantineTheme,
  } from '@mantine/core';
  import { useDisclosure } from '@mantine/hooks';
 
  
  import  './Header.css';
import { useState , useEffect} from 'react';
  
  const mockdata = [
    {
      icon: Forklift,
      title: 'EFOM',
      description: 'Custom logistic software streamlining order-to-cash operations.',
    },
    {
      icon: Antenna,
      title: 'CATS',
      description: 'The system improves commodity visibility and reporting',
    },
    {
      icon: Activity,
      title: 'RMCARE',
      description: 'A maternal and child health software co-developed with users.',
    },
    
    {
      icon: DatabaseZap,
      title: 'MAVEKO',
      description: 'Data outsourcing handles customer orders and inventory management.',
    },
    {
      icon: University,
      title: 'SIS',
      description: 'A software for colleges to manage student information',
    },
    {
      icon: HardHat,
      title: 'ECOM',
      description: 'A custom app suite to boost productivity in construction',
    },
  ];
  
  export default function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
    const theme = useMantineTheme();
    const [color, setColor] = useState(false);

    useEffect(() => {
      const changeColor = () => {
          if (window.scrollY >= 90) {
              setColor(true);
          } else {
              setColor(false);
          }
      };

    
      window.addEventListener('scroll', changeColor);

      
      return () => {
          window.removeEventListener('scroll', changeColor);
      };
  }, []); 

  const links = mockdata.map((item) => (
      <UnstyledButton className="subLink" key={item.title}>
          <Group wrap="nowrap" align="flex-start">
              <ThemeIcon size={34} variant="default" color={"#FFB413"} radius="md">
                  <item.icon size={25} color={"#FFB413"} />
              </ThemeIcon>
              <div>
                  <Anchor size="sm" fw={500} href="product#1" c={"#FFB413"}>
                      {item.title}
                  </Anchor>
                  <Text size="xs" c="dimmed">
                      {item.description}
                  </Text>
              </div>
          </Group>
      </UnstyledButton>
  ));

  return (
      <Box pb={10} className={color ? 'headers header-bg' : 'headers'}>
        <header className="header">
          <Group justify="space-between" h="100%">
          <Image
     
      className="image"
      src="logo.png"
       alt='image'
    />
     
  
            <Group h="100%" gap={0} visibleFrom="md">
              <a href="/" className="link">
                Home
              </a>
              <a href="/About" className="link">
                About
              </a>
              <a href="/Service" className="link">
                Our Service
              </a>
              <HoverCard width={600} position="bottom" radius="md" shadow="md" withinPortal>
                <HoverCard.Target>
                  <a href="/Product" className="link">
                    <Center inline>
                      <Box component="span" mr={5}>
                        Our product
                      </Box>
                      <ChevronDown size={21} color={theme.colors.blue[1]} />
                    </Center>
                  </a>
                </HoverCard.Target>
  
                <HoverCard.Dropdown style={{ overflow: 'hidden' }}>
                  <Group justify="space-between" px="md" m={10}>
                    <Text fw={500} ml={-22}>Our product</Text>
                    <Anchor href="/Product" fz="md" c={"#FFB413"}>
                      View all
                    </Anchor>
                  </Group>
  
                  
  
                  <SimpleGrid cols={2} spacing={15} pb={15} >
                    {links}
                  </SimpleGrid>
  
                
                </HoverCard.Dropdown>
              </HoverCard>
              <a href="/news" className="link">
                News
              </a>
              <a href="/Contact" className="link">
                Contact Us
              </a>
            
            </Group>
  
           
  
            <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm"   mt={-172} ml={250} />
          </Group>
        </header>
  
        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Mentore Knowledge Solution"
          hiddenFrom="sm"
          zIndex={1000000}
        >
            <Image
    
     className="imageheader"
     src="logo1.png"
      alt='image'
   />
          <ScrollArea h="calc(100vh - 80px" mx="-md" mt={-575}>
            <Divider my="sm" />
  
            <a href="/" className="link">
              Home
            </a>
            <a href="/About" className="link">
              About
            </a>
            <a href="/Service" className="link" >
              Our Service
            </a>
            <UnstyledButton className="link" onClick={toggleLinks} ml={25}>
              <Center inline>
                <Box component="span" mr={5}>
                  Our Product
                </Box>
                <ChevronDown size={16} color={theme.colors.blue[6]} />
              </Center>
            </UnstyledButton>
            <Collapse in={linksOpened}>{links}</Collapse>
            <a href="/news" className="link">
                News
              </a>
            <a href="/Contact" className="link">
              Contact
            </a>
           
  
           
  
           
          </ScrollArea>
        </Drawer>
      </Box>
    );
  }