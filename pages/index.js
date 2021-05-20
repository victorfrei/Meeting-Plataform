import { Avatar } from '@chakra-ui/avatar'
import { Button } from '@chakra-ui/button'
import { Box, Grid, GridItem, Heading, List, ListItem,Text,Link } from '@chakra-ui/layout'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import { Card } from '../components/Card'
import { TopNav } from '../components/TopNav'






export default function Home() {

  useEffect(()=>{
   let time,time2,time3,time4;
    function calctime(){
    var controle = 20;
    time = Math.random() * controle  ;
    time2 = Math.random() * controle+2;
    time3 = Math.random() * controle+3;
    time4 = Math.random() * controle+4;

     



    }
    
    calctime();
    while(time < 10 || time2 < 10 ||time3 < 10 ||time4<10){
      calctime();
    }

    var effe = document.querySelector('.home-page-effects');
    var effe2 = document.querySelector('.home-page-effects-2');
    var effe3 = document.querySelector('.home-page-effects-3');
    var effe4 = document.querySelector('.home-page-effects-4');
    effe.style.setProperty('--animation-time', time +'s');
    effe2.style.setProperty('--animation-time-2', time2 +'s');
    effe3.style.setProperty('--animation-time-3', time3 +'s');
    effe4.style.setProperty('--animation-time-4', time4 +'s');
    
    
  });




  return (
    

    <Box overflow='hidden' width="100%" height="100vh">
    <Head><title>Skap Meetings</title></Head>
    <TopNav bg="transparent" shadow='none'>
      <img src="/logo.png" min-width='50px' min-height='50px' width="50px" height="50px"></img>
      <Box margin="0 40px" flex='2' display={['none','flex']}>
        <List display='flex' flexDir='row' >
          <ListItem margin='10px'>Sobre Nós</ListItem>
          <ListItem margin='10px'>Novidades</ListItem>
          <ListItem margin='10px'>Preço</ListItem>
        </List>
      </Box>
      <Link href="/login" _hover={{textDecor:"none"}}><Button roundedTop='full' roundedBottomLeft='full' bg="#E69A3E" _hover={{bg:'#E67A0E'}}>Login</Button></Link>
      
    </TopNav>

    <Grid 
    width='100%'
    height='100%'
    templateRows="repeat(1, 1fr)"
    templateColumns={["repeat(1, 1fr)","repeat(1, 1fr)","repeat(1, 1fr)","1fr 60%"]}
    >

    <GridItem padding={['0','0','0','120px 20px']} maxW='90%' display='flex' justifyContent='center' alignItems='center'>
      <Card bg="transparent" shadow="none" padding={['20px','0']}>
      <Heading margin='10px'>As Conversas Online Não Serão Mais As Mesmas</Heading>
      <Text margin='10px'>Tenha ótimas reuniões através de nossa plataforma, uma plataforma nova e que foca na sua experiência como usuário.</Text>      
      <Link href="/signup" _hover={{textDecor:'none'}}><Button margin='10px' size='lg' bg="#23A4B2" roundedTop='full' roundedBottomRight='full'>Comece Agora</Button></Link>
      
      </Card>
    </GridItem>

    <GridItem display='flex' flexDir='row' justifyContent='center' alignItems='center' alignContent='center' marginRight='140px'  display={['none','none','none','flex']}>
    <Box className="home-page-effects" bg="red.300" px='30.5'></Box>
    <Box className="home-page-effects-2" bg="green.300"></Box>
    <Box className="home-page-effects-3" bg="gray.500"></Box>
    <Box className="home-page-effects-4" bg="blue.300"></Box>
    </GridItem>
    </Grid>


    </Box>

  )
}
