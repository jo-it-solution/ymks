import { AspectRatio, Card, Container, Image, SimpleGrid, Text } from '@mantine/core';
import classes from './news.module.css';
import { FooterLinks } from '../../components/footer/footer';
import HeaderMegaMenu from '../../components/header/header';

const mockdata = [
  {
    toptitle:'Title',
    title: 'Top 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summer',
    image:
      'new1.jpg',
    date: 'August 18, 2022',
  },
  {
    toptitle:'Title',
    title: 'Top 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summer',
    image:
      'new.jpg',
    date: 'August 27, 2022',
  },
  {
    toptitle:'Title',
    title: 'Top 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summer',
    image:
      'new.jpg',
    date: 'September 9, 2022',
  },
  {
    toptitle:'Title',
    title: 'Top 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summer',
    image:
      'new.jpg',
    date: 'September 12, 2022',
  },
  {
    toptitle:'Title',
    title: 'Top 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summer',
    image:
      'new.jpg',
    date: 'September 9, 2022',
  },
  {
    toptitle:'Title',
    title: 'Top 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summerTop 10 places to visit in Norway this summer Top 10 places to visit in Norway this summer',
    image:
      'new.jpg',
    date: 'September 12, 2022',
  },
];

export function News() {
  const cards = mockdata.map((article) => (
    <Card key={article.title}   radius="md" component="a" href="#" className={classes.card}>
      <AspectRatio ratio={4920 / 3080}>
        <Image src={article.image} />

      </AspectRatio>
      <Text className={classes.toptitle} mt={5}>
        {article.toptitle}
      </Text>
      <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
        {article.date}
      </Text>
     
      <Text className={classes.title} c="dimmed" mt={5}>
        {article.title}
      </Text>
    </Card>
  ));

  return (
    <div className={classes.body}>
       <div className={classes.header}> <HeaderMegaMenu /></div>
       <Image
        w={800}
        ml={540}
        mt={0}
         src='news.png'
         className={classes.img}
       />
        <Text  className={classes.texts}>News</Text>
    <Container py="xl" pl={4}>
     

      <SimpleGrid cols={{ base: 1, sm: 2  }} mb={100} >{cards}</SimpleGrid>
     
    </Container>
    <FooterLinks/>
    </div>
  );
}