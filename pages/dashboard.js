
import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/layout";
import {FiHome,FiPlusSquare, FiVideo} from "react-icons/fi";
import { Card } from "../components/Card";
import { NavBar } from "../components/NavBar";



export default function dashboard(){
    return (
    
    
    <Grid
    height='100vh'
    templateColumns='80px repeat(2,1fr)'
    templateRows='80px 1fr'
    >

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
       
       
    <GridItem display='flex' gridGap={5}  justifyContent='center' alignItems='start' colSpan={1} rowSpan={1} rowStart={2} colStart={2}>
        
        <Card width="240px" bg="#E4B342" height='200px' borderRadius="15px">
        <NavBar bg="rgba(255,226,229,0.3)" width='50px' height='50px' marginBottom='50px'>
        <FiVideo shadow='base'></FiVideo>
        </NavBar>
         <Heading  size={2}>Nova Chamada</Heading>
         <Text color="rgba(255,255,255,0.6)" fontSize="11px">Crie um nova chamada</Text>
        </Card>

        <Card width="240px" bg="#2753BF" height='200px' borderRadius="15px">
        <NavBar bg="rgba(255,226,229,0.3)"  width='50px' height='50px' marginBottom='50px'>
        <FiPlusSquare shadow='base'></FiPlusSquare>
        </NavBar>
        <Heading size={2}>Juntar-se</Heading>
        <Text color="rgba(255,255,255,0.6)" fontSize="11px">Junte-se a uma sala existente</Text>
        </Card>

    </GridItem>

    </Grid>

    )
}

