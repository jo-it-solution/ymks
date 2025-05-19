import { Image, Title, Text } from "@mantine/core";
import classes from "./about.module.css";
import { FooterLinks } from "../../components/footer/footer";
import HeaderMegaMenu from "../../components/header/header";

export default function About() {
  return (
    <div className={classes.body}>
      <div style={{ position: "relative", zIndex: 1 }}>
        <div
         
          className={classes.header}
        >
          
          <HeaderMegaMenu />
        </div>
      </div>
      <Image
        radius="md"
        w={800}
        ml={543}
        mt={-20}
        alt="image"
        src="about.png"
        className={classes.img}
      />
      
      <Title mt={-400} ml={225} className={classes.title}>
        About
      </Title>
      <Title mt={-119} ml={558} c={"white"} className={classes.title1}>
        Us
      </Title>

      <Text ml={210} w={500} c="dimmed" className={classes.text}>
        Mentor Knowledge Solutions PLC is an IT and Management Consulting firm
        taking an active role in the business of making organizations perform
        better.
      </Text>
       <div className={classes.group2}>
       <Image
        radius="md"
        w={680}
        ml={-8}
        mt={430}
        alt="image"
        src="vision.png"
        className={classes.img2}
      />
      <div className={classes.descripion}>
      <Title mt={-840} ml={855} c="dimmed" className={classes.title2}>
        Our Vision
      </Title>

      <Text ml={740} c="dimmed" w={600} mt={20} className={classes.descripion}>
        Unlocking technology potential to help organizations innovate, deliver
        superior customer experience, and perform better
      </Text>

      <Image radius="md" w={25} ml={690} mt={-50} alt="image" src="icon2.png" className={classes.img3} />

      <Title mt={55} ml={855} c="dimmed" className={classes.title3}>
        Our Mission
      </Title>

      <Text ml={740} c="dimmed" w={580} mt={35} mb={20} className={classes.descripion}>
        Provide proactive and responsive IT and management consulting services
        that help small and medium enterprises become stronger and more
      </Text>
      <Image
        radius="md"
        w={25}
        ml={690}
        mt={-70}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img5}
      />
      <Image w={4} h={90} ml={700} mt={-61} alt="image" src="Line.png"  className={classes.img4} />
      <Text ml={740} c="dimmed" w={580} mt={-5} className={classes.descripion}>
        Offer custom application development services for both enterprise and
        consumer apps based on business process management concepts
      </Text>
      <Image
        radius="md"
        w={25}
        ml={690}
        mt={-50}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img6}
      />
      <Image w={4} h={60} ml={700} mt={-61} alt="image" src="Line.png"   className={classes.img4}/>
      <Text ml={740} c="dimmed" w={580} mt={-5} className={classes.descripion}>
        Provide technology-enabled back-office and front-office business
        services with sourcing arrangement.
      </Text>
      <Image
        radius="md"
        w={25}
        ml={690}
        mt={-50}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img7}
      />
      <Image w={4} h={60} ml={700} mt={-61} alt="image" src="Line.png"  className={classes.img4} />
      <Text ml={740} c="dimmed" w={580} mt={-5} className={classes.descripion}>
        Create a platform strategy to attract top talent, and foster innovation
        and creativity in the workplace to retain them.
      </Text>
      <Image
        radius="md"
        w={25}
        ml={690}
        mt={-50}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img7}
      />
      <Image w={4} h={60} ml={700} mt={-61} alt="image" src="Line.png"  className={classes.img4} />
      <Text ml={740} c="dimmed" w={580} mt={-5} className={classes.descripion}>
        Provide tailored professional development and executive education to
        improve the skillsets, knowledge and competencies of business executives
        and IT
      </Text>
      <Image
        radius="md"
        w={25}
        ml={690}
        mt={-50}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img6}
      />
      <Image w={4} h={60} ml={700} mt={-61} alt="image" src="Line.png"  className={classes.img4} />
      <Text ml={740} c="dimmed" w={580} mt={-6}className={classes.descripion}>
        Foster entrepreneurship and business incubation
      </Text>
      <Image
        radius="md"
        w={25}
        ml={690}
        mt={-20}
        mb={100}
        alt="image"
        src="icon2.png"
        className={classes.img8}
      />

      <Image w={4} h={60} ml={700} mt={-101} alt="image" src="Line.png"  className={classes.img4} />
      <Text ml={740} c="dimmed" w={580} mt={-15} className={classes.descripion}>
        Deliver real value to shareholders through consistent growth and
        profitability
      </Text>
      <Image radius="md" w={25} ml={690} mt={-20} alt="image" src="icon2.png" 
      className={classes.img9}  />
      </div>
       
     
      
      <Title mt={185} ml={255} c="dimmed" className={classes.title4}>
        Our Value
      </Title>
      <Image
        radius="md"
        w={650}
        ml={693.4}
        mt={-10}
        alt="image"
        src="value.png"
        className={classes.img10}
      />
   <div className={classes.descripion2}>
      <Text ml={80} c="dimmed" w={580} mt={-465} className={classes.title5}>
        Working hard to make a difference in the organizations we serve
      </Text>
      <Image
        radius="md"
        w={25}
        ml={40}
        mt={-28}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img11}
      />

      <Image w={4} h={60} ml={50} mt={-61} alt="image" src="Line.png"  className={classes.img4}/>
      <Text ml={80} c="dimmed" w={580} mt={-15} className={classes.title5}>
        Striving to handle each client with accountability and responsiveness
      </Text>
      <Image
        radius="md"
        w={25}
        ml={40}
        mt={-25}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img11}
      />

      <Image w={4} h={60} ml={50} mt={-61} alt="image" src="Line.png" className={classes.img4} />
      <Text ml={80} c="dimmed" w={580} mt={-18} className={classes.title5}>
        Commitment to consistent delivery of quality and value through
        innovation
      </Text>
      <Image
        radius="md"
        w={25}
        ml={40}
        mt={-25}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img11}
      />
    
      <Image w={4} h={60} ml={50} mt={-61} alt="image" src="Line.png"  className={classes.img4}/>
      <Text ml={80} c="dimmed" w={580} mt={-15} className={classes.title5}>
        Nurturing open communication, continuous learning, collaboration and
        team work
      </Text>
      <Image
        radius="md"
        w={25}
        ml={40}
        mt={-25}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img11}
      />

      <Image w={4} h={60} ml={50} mt={-61} alt="image" src="Line.png" className={classes.img4}/>
      <Text ml={80} c="dimmed" w={580} mt={-20} className={classes.title5}>
        Commitment to impart knowledge, provide opportunity and mentor ship,
        command respect
      </Text>
      <Image
        radius="md"
        w={25}
        ml={40}
        mt={-50}
        mb={60}
        alt="image"
        src="icon2.png"
        className={classes.img12}
      />

      <Image w={4} h={60} ml={50} mt={-61} alt="image" src="Line.png" className={classes.img4}/>
      <Text ml={80} c="dimmed" w={580} mt={-5} className={classes.title5}>
        Create an atmosphere where all staff are respected and valued
      </Text>
      <Image
        radius="md"
        w={25}
        ml={40}
        mt={-25}
        mb={160}
        alt="image"
        src="icon2.png"
        className={classes.img13}
      /> </div> </div>

      <FooterLinks />
    </div>
  );
}
