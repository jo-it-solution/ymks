import { Container, Grid,  Image,Text,Button,Group ,Title} from '@mantine/core';
import classes from './product.module.css';
import { Forklift,ArrowRight , HardHat,BookUser,BookOpen,CircuitBoard,HandCoins} from 'lucide-react';



export default function Product() {
  return (
    <Container className={classes.body}>

       <Title
            ml={370}
            mb={60}
            mt={60}
            className={classes.titles}
           
            
            >
            Our Product
              </Title> 
       
      <div className={classes.parents} id={classes.gg}>
     <Grid className={classes.grid} >   
     <Grid.Col span={{ base: 3, md: 50, lg: 4  }} className={classes.parent}  >
        <Image
      radius="md"
      h={240}
      w="auto"
      fit="contain"
      src="card1.jpg"
       alt='image'
       className={classes.Images}
      
      
    />
      <div className={classes.contents}>
     <Forklift size={49} strokeWidth={1} className={classes.icon} />
     <div className={classes.content}>
    <Text fw={700} fz="lg" mb="xs" mt={5}  className={classes.title}>
    Electronic Freight Operations
    Management (eFOM)
        </Text>
        <Text c="black" fz="sm">
        A full-fledged bespoke freight forwarding 
& logistics enterprise application software
whi- ch targets the transformation of the 
order-to-cash business operation.
        </Text>
        
        
        
    
    <Group justify="center" mt={35}  >
      

    <Button className={classes.buttons} component='a' href='/product#1'   radius="xl" rightSection={<ArrowRight size={22} width={20}  />}>Learn More</Button>

      
    </Group>
    
        
        </div>
        </div>
    </Grid.Col>


   
    
    <Grid.Col span={{ base: 12, md: 6, lg: 4 }} className={classes.parents2} id={classes.parent} >
        <Image
      radius="md"
      h={240}
      w="auto"
      fit="contain"
      src="card2.jpg"
       alt='image'
      className={classes.Images}
      
    />
      <div className={classes.contents}>
     <HardHat size={49} strokeWidth={1} className={classes.icon} />
     <div className={classes.content}>
    <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
    Electronic Construction Manag-
    ement (eCOM)
        </Text>
        <Text c="black" fz="sm">
        A tailored application combined of enterpr- ise application and a 
        set of mobile apps designed and developed to enhance produ-ctivity
         and efficiency in the construction industry.
        </Text>
        
        
        
    
    <Group justify="center" mt={15} >
      

    <Button className={classes.buttons} component='a' href='/product#2'   radius="xl" rightSection={<ArrowRight size={22} width={20}  />}>Learn More</Button>

      
    </Group>
    
        
        </div>
        </div>
    </Grid.Col>



  <Grid.Col span={{ base: 12, md: 6, lg: 4 }}  className={classes.parent3} >
        <Image
      radius="md"
      h={240}
      w="auto"
      fit="contain"
      src="card3.jpg"
       alt='image'
      className={classes.Images}
      
    />
      <div className={classes.contents}>
     <BookUser size={49} strokeWidth={1} className={classes.icon} />
     <div className={classes.content}>
    <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
    Rural Mothers Care (rmCare) ​
        </Text>
        <Text c="black" fz="sm">
        A maternal and child health care software designed by using 
        ethnographic methods and participatory design techn iques 
        where both end users and programmers contrib- uted to the 
        develop ment of the tool
        </Text>
        
        
        
    
    <Group justify="center" mt={44} >
      

    <Button className={classes.buttons} component='a' href='/product#5' radius="xl" rightSection={<ArrowRight size={22} width={20}  />}>Learn More</Button>

      
    </Group>
    
        
        </div>
        </div>
    </Grid.Col >
    

    </Grid>
    </div>  
  
    <div className={classes.parents}>
     <Grid className={classes.grids} >   
     <Grid.Col span={{ base: 3, md: 50, lg: 4  }} className={classes.parent} id={classes.parents} >
     <Image
      radius="md"
      h={230}
      w="auto"
      fit="contain"
      src="card4.jpg"
       alt='image'
      className={classes.Imagess }
      
      
    />
      <div className={classes.contents} style={{width:"21rem"}}>
     <BookOpen size={49} strokeWidth={1} className={classes.icons} />
     <div className={classes.contentss}>
    <Text fw={700} fz="lg" mb="xs" mt={16} className={classes.title} >
    SIS (Student Information System)
        </Text>
        <Text c="black" fz="sm">
        A software product developed for Techn- ology college, designed to support higher 
        learning institutions in the management of their students’ information.
        </Text>
        
        
        
    
    <Group justify="center" mt={49} >
      

    <Button className={classes.buttons} component='a' href='/product#4'  mt={25} radius="xl" rightSection={<ArrowRight size={22} width={20}  />}>Learn More</Button>

      
    </Group>
    
        
        </div>
        </div>
    </Grid.Col>


   
    
    <Grid.Col span={{ base: 12, md: 6, lg: 4 }} className={classes.parents2} >
    <Image
      radius="md"
      h={240}
      w="auto"
      fit="contain"
      src="card5.JPG"
       alt='image'
      className={classes.Images}
      
    />
      <div className={classes.contents}>
     <CircuitBoard size={49} strokeWidth={1} className={classes.icon} />
     <div className={classes.content}>
    <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
    CATS
        </Text>
        <Text c="black" fz="sm">
        CATS (commodity allocation and tracking system) improves the visibility
         of commodit- ies as they move from the donor to the beneficiaries, through
          the EDRMC supply chain. Improved visibility means improved management,
           which leads to improved rep-orting to the donors.
        </Text>
        
        
        
    
    <Group justify="center" mt={15} >
      

    <Button className={classes.buttons} component='a' href='/product'  radius="xl" rightSection={<ArrowRight size={22} width={20}  />}>Learn More</Button>

      
    </Group>
    
        
        </div>
        </div>
    </Grid.Col>



  <Grid.Col span={{ base: 12, md: 6, lg: 4 }}  className={classes.parent3} id={classes.parentss} >
  <Image
      radius="md"
      h={240}
      w="auto"
      fit="contain"
      src="card6.JPG"
       alt='image'
      className={classes.Images}
      
    />
      <div className={classes.contents}>
     <HandCoins size={49} strokeWidth={1} className={classes.icon} />
     <div className={classes.content}>
    <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
    MAVEKO
        </Text>
        <Text c="black" fz="sm">
        The data outsourcing work involves manag
         ing the daily orders of customers to meet
          their product needs, including creatingnew 
          orders and confirming them. Along with handling
           requests for quota, booking inven tory, and managing
            the products and stocks.
        </Text>
        
        
        
    
    <Group justify="center" mt={35} >
      

    <Button className={classes.buttons} component='a' href='/product#3'   radius="xl" rightSection={<ArrowRight size={22} width={20}  />}>Learn More</Button>

      
    </Group>
    
        
        </div>
        </div>
    </Grid.Col >
    

    </Grid>
    </div>  

    
    </Container>
  );
}