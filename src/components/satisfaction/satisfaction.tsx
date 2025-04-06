
import classes from './satisfaction.module.css';
import { Box , Image ,Title} from '@mantine/core';

export default function Satisfaction() {
  return (
    <div className={classes.body}>


      <Title
      ml={50}
      mb={60}
      mt={-30}
      className={classes.title}
      
      >
      Satisfied Clients
        </Title> 
     
       <Box
      className={classes.box}

      
    />

 <div className={classes.logo}>
    

    
<Box
      className={classes.insidebox}
   
      
    />

<Image
      
      w={210}
      h={440}
      src="logo1.png"
      mt={-500}
      ml={400}
      className={classes.img}
       alt='image'
    />

<Image
      
      
      src="sat1.png"
      w={120}
      mt={-560}
      ml={440}
       alt='image'
       className={classes.img1}
    />  

<Image
      
      
      src="sat2.png"
      w={120}
      mt={20}
      ml={700}
       alt='image'
       className={classes.img2}
    />   

<Image
      
      
      src="sat3.png"
      w={120}
      mt={100}
      ml={720}
      className={classes.img3}
       alt='image'
    />  


    <Image
      
      
      src="sat4.png"
      w={120}
      mt={80}
      ml={450}
      className={classes.img4}
       alt='image'
    /> 
           
           <Image
      
      
      src="sat5.png"
      w={120}
      mt={-520}
      ml={210}
       alt='image'
       className={classes.img5}
    />   

<Image
      
      
      src="sat6.png"
      w={120}
      mt={100}
      ml={220}
      className={classes.img6}
       alt='image'
    />   

</div>   


    </div>
  );
}