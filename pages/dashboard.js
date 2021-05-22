
import { Avatar } from "@chakra-ui/avatar";
import { Box, Flex, Grid, GridItem, Heading, Link, Text, } from "@chakra-ui/layout";
import { formatWithValidation } from "next/dist/next-server/lib/utils";
import Head from "next/head";
import { useEffect, useState } from "react";
import {FiHome,FiPlusSquare, FiVideo} from "react-icons/fi";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";
import {useRouter} from 'next/router';
import { useSession } from "next-auth/client";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
    Switch,
    useColorMode,
  } from "@chakra-ui/react"

export default function dashboard(){

    const { colorMode, toggleColorMode } = useColorMode()
    const [ session, loading] = useSession();
    const router = useRouter();
    const [hour,sethour] = useState("00");
    const [minutes,setminutes] = useState("00");
    setInterval(() => {
        sethour(new Date().getHours());
        setminutes(new Date().getMinutes());
    }, 100);


    if(session && !loading){ //change true to session

    return (
        
   <Grid
    height='100vh'
    templateColumns='80px repeat(2,1fr)'
    templateRows='80px 1fr'
    >
    <Head><title>Dashboard</title></Head>
    <GridItem display='flex' margin='20px 0' flexDir='column' justifyContent='space-between' alignContent='center' rowSpan={2} colSpan={1}>
    
        <Flex justifyContent='center' >
            <img src='/logo.png' width='50px'></img>
        </Flex>
        
        <Flex flexDir='column' alignItems='center'>

        <NavBar>
        <FiHome size='23px'/>
        </NavBar>

        <NavBar>
        <FiPlusSquare size='23px'/>
        </NavBar>
        </Flex>
      
      <Box>

      </Box>
    </GridItem>
       
       
    <GridItem display='flex' gridGap={5} padding="20px"  justifyContent='center' alignItems='start' colSpan={1} rowSpan={1} rowStart={2} colStart={2}>
        
        <Card min-width='50%' width="60%" bg="#E4B342" height='200px' borderRadius="15px">
        <NavBar bg="rgba(255,226,229,0.3)" width='50px' height='50px' marginBottom='50px'>
        <FiVideo shadow='base'></FiVideo>
        </NavBar>
         <Heading  size={2}>Nova Chamada</Heading>
         <Text color="rgba(255,255,255,0.6)" fontSize="11px">Crie um nova chamada</Text>
        </Card>

        <Card min-width='50%' width="60%" bg="#2753BF" height='200px' borderRadius="15px">
        <NavBar bg="rgba(255,226,229,0.3)"  width='50px' height='50px' marginBottom='50px'>
        <FiPlusSquare shadow='base'></FiPlusSquare>
        </NavBar>
        <Heading size={2}>Juntar-se</Heading>
        <Text color="rgba(255,255,255,0.6)" fontSize="11px">Junte-se a uma sala existente</Text>
        </Card>

    </GridItem>

    <GridItem display='flex' justifyContent='flex-end' alignItems='center' padding='0 30px' colSpan={2} rowSpan={1} rowStart={1} colStart={2}>
    <Menu isLazy>
  <MenuButton>{/* <Avatar src={session.user.image} name={session.user.name} bg='transparent' border="2px solid #E69A3E" shadow='base'></Avatar> */}
        <Avatar name="victor freire" bg='transparent' border="2px solid #E69A3E" shadow='base'></Avatar></MenuButton>
  <MenuList >
    {/* MenuItems are not rendered unless Menu is open */}
    <Flex flexDir='column' justifyContent='center' alignItems='center'>
    <Avatar src={session.user.image} name={session.user.name} bg='transparent' border="2px solid #E69A3E" shadow='base'></Avatar>
    <Text>{session.user.name}</Text>
    </Flex>
    <MenuDivider/>
    <MenuItem>Conta</MenuItem>
    <MenuItem>Configurações</MenuItem>
    <Link href="/logout" textDecor='none'><MenuItem>Sair</MenuItem></Link>
    <MenuDivider/>
    <Flex justifyContent='flex-start'  alignItems='center'>
    <Switch padding='0 10px'
    onChange={(e)=>{if(e.target.ischecked){toggleColorMode()}else{toggleColorMode()}}} 
    >{colorMode =="light"?"Light Mode":"Dark Mode"}</Switch>
    </Flex>
  </MenuList>

</Menu>
        
    </GridItem>

    <GridItem display='flex' flexDir='column' gridGap={5} alignItems='center' colStart={3} padding='20px 40px' colSpan={1} rowStart={2} rowSpan={2}>

   
        <Card min-width='100%' width="100%" bg="#2753BF" height='200px' borderRadius="15px">
        <NavBar bg="rgba(255,226,229,0.3)"  width='140px' height='50px' marginBottom='50px'>
        <Heading>{hour}:{minutes}</Heading>
        </NavBar>
        <Text color="rgba(255,255,255,0.7)" fontSize="14px">{new Date().toLocaleDateString('pt-BR',{weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'})}</Text>
        </Card>

        <Alert status="info" borderRadius='15px'>
    <AlertIcon />
    Não há salas criadas.
  </Alert>

        <Card hidden minWidth='100%' textAlign='center' width="100%" height='80px' bg="#29292F" border="1px solid rgba(255,255,255,0.3)"  borderRadius="15px">
        <Text color="rgba(255,255,255,0.7)" fontSize="14px"></Text>
        </Card>

    </GridItem>

    </Grid>
    )

    }else{
       useEffect(()=>{
            router.replace('/');
       })
    }
   

    if(loading){
        return <div>Loading...</div>
    }
      
}




