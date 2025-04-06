import React, { useState } from 'react';
import classes from './service.module.css';
import { 
  Container, 
  SimpleGrid, 
  Text, 
  ThemeIcon, 
  Title, 
  Divider 
} from '@mantine/core';
import { Users , ClockArrowUp,Cpu,Webhook , LayoutGrid} from 'lucide-react';


export const MOCKDATA = [
  {
    ids: 1,
    icon: ClockArrowUp,
    title: 'IT and Management Consulting',
    description:
      'Provide proactive and responsive IT and management consulting services that help small and medium enterprises become stronger and more competitive.',
  },
  {
    ids: 2,
    icon: Users,
    title: 'Custom Application Development',
    description:
      'Offer custom application development for both enterprise and consumer apps based on business process management concepts',
  },
  {
    ids: 3,
    icon: Cpu,
    title: 'Technology-enabled Business Services',
    description:
      'Provide technology-enabled backoffice and front-office business services with sourcing arrangements.',
  },
  {
    ids: 4,
    icon: Webhook,
    title: 'Tailored Professional Development',
    description:
      'Provide tailored professional development and executive education to improve the skill sets, knowledge, and competencies of business executives and IT professionals.',
  },
  {
    ids: 5,
    icon: LayoutGrid,
    title: 'Outsourcing Services',
    description:
      'Provide tailored professional development and executive education to improve the skill sets, knowledge, and competencies of business executives and IT professionals.',
  },
];

interface FeatureProps {
  ids: React.ReactNode; 
  icon: React.FC<any>; 
  title: React.ReactNode;
  description: React.ReactNode;
}

export function Feature({ ids, icon: Icon, title, description }: FeatureProps) {
  const [hovered, setHovered] = useState(false); 

  return (
    <div 
      onMouseEnter={() => setHovered(true)} 
      onMouseLeave={() => setHovered(false)} 
      className={classes.card} 
    >
      <Text 
        mt="sm" 
        mb={7}
        ml={80}
        pl={10}
        className={classes.number} 
        style={{ backgroundColor: hovered ? '#ffae00' : 'transparent', transition: 'background-color 0.3s', color: hovered ? 'white' : 'black' }} 
      >
        {ids}
      </Text>

      <Divider my="sm" mt={-24} ml={110} w={295} className={classes.divider} style={{ backgroundColor: hovered ? 'aqua' : 'transparent', transition: 'background-color 0.3s' }} />

      <div className={classes.cards}>
        <ThemeIcon variant="light" w={60} h={60} size={49} radius={40} color={'#ffae00'} ml={80}>
          <Icon size={49} strokeWidth={1.5} />
        </ThemeIcon>
        <Text mt="sm" mb={7}>
          {title}
        </Text>
        <Text size="sm" color="dimmed">
          {description}
        </Text>
      </div>
    </div>
  );
}

export function FeaturesGrid() {
  const features = MOCKDATA.map(feature => <Feature {...feature} key={feature.ids} />);

  return (
    <Container className={classes.wrapper}>
      <Title className={classes.title}>Our Service</Title>

      <SimpleGrid
        mt={60}
        cols={{ base: 1, sm: 2, md: 3 }}
        spacing={{ base: 'xl', md: 50 }}
        verticalSpacing={{ base: 'xl', md: 50 }}
      >
        {features}
      </SimpleGrid>
      <Divider w={300} mt={-808} ml={762} size={10} color="#fbfbfd" style={{ position: 'relative' }} />
      <Divider w={300} mt={430} ml={436} size={10} color="#fbfbfd" style={{ position: 'relative' }} />
    </Container>
  );
}