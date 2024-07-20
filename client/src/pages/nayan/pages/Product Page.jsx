// import wave from "../assets/wave.png";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  VStack,
  chakra,
  SimpleGrid,
  Breadcrumb,
  BreadcrumbLink,
  Stack,
  Heading,
  BreadcrumbItem,
  Box,
  Flex,
  Image,
  IconButton,
  useToast,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { useEffect } from "react";

import { RiDeleteBinLine } from "react-icons/ri"

import { ACTION_GET_PRODUCTS } from "../../../redux/products/product.actions";
import { ACTION_ADD_PRODUCT, ACTION_DELETE_PRODUCT } from "../../../redux/admin/admin.actions";
// import axios from "axios";
// const getData = async () => {
//   let { data } = await axios.get("http://localhost:8080/products");
//   console.log(data.length);
//   return data;
// };
// productData from "C:\Users\hritik\new gym\gym.com-main\p.json";

const ProductPage = () => {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);

  const toast = useToast()

  const { userData, isAuth, AdminIsAuth } = useSelector((store) => store.auth);
  //console.log(product.data, "from selector");

  //useEffect(() => {
  // 
  //}, [dispatch]);
  const productData=[
    {
        "_id": "639c19c57013b49915666d54",
        "image": "https://i.ibb.co/pQFBWGb/product-3.png",
        "price": "16.54",
        "qty": 1,
        "productName": "100% WHEY"
    },
    {
        "_id": "639c19c57013b49915666d57",
        "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
        "price": "16.54",
        "qty": 1,
        "productName": "ESSENTIALS"
    },
    {
        "_id": "639c19c57013b49915666d55",
        "image": "https://i.ibb.co/rxzqPWN/product-4.png",
        "price": "16.54",
        "qty": 1,
        "productName": "BCAA pro"
    },
    {
        "_id": "639c19c57013b49915666d5c",
        "image": "https://i.ibb.co/xqGSNGC/product-10.png",
        "price": "16.54",
        "qty": 1,
        "productName": "JUMPING ROPE"
    },
    {
        "_id": "639c19c57013b49915666d61",
        "image": "https://i.ibb.co/rxzqPWN/product-4.png",
        "price": "16.54",
        "qty": 1,
        "productName": "BCAA pro"
    },
    {
        "_id": "639c19c57013b49915666d5a",
        "image": "https://i.ibb.co/mT0N794/product-8.png",
        "price": "16.54",
        "qty": 1,
        "productName": "HYDRA FUSION"
    },
    {
        "_id": "639c19c57013b49915666d68",
        "image": "https://i.ibb.co/xqGSNGC/product-10.png",
        "price": "16.54",
        "qty": 1,
        "productName": "JUMPING ROPE"
    },
    {
        "_id": "639c19c57013b49915666d69",
        "image": "https://i.ibb.co/123fSm3/product-11.png",
        "price": "16.54",
        "qty": 1,
        "productName": "Leather Lyca"
    },
    {
        "_id": "639c19c57013b49915666d58",
        "image": "https://i.ibb.co/BfPJ2HF/product-6.png",
        "price": "16.54",
        "qty": 1,
        "productName": "FLYING NINJA "
    },
    {
        "_id": "639c19c57013b49915666d5b",
        "image": "https://i.ibb.co/xqGSNGC/product-10.png",
        "price": "16.54",
        "qty": 1,
        "productName": "INVICTA DUMBBELL"
    },
    {
        "_id": "639c19c57013b49915666d5d",
        "image": "https://i.ibb.co/123fSm3/product-11.png",
        "price": "16.54",
        "qty": 1,
        "productName": "Leather Lyca"
    },
    {
        "_id": "639c19c57013b49915666d64",
        "image": "https://i.ibb.co/BfPJ2HF/product-6.png",
        "price": "16.54",
        "qty": 1,
        "productName": "FLYING NINJA "
    },
    {
        "_id": "639c19c57013b49915666d56",
        "image": "https://i.ibb.co/rxzqPWN/product-4.png",
        "price": "16.54",
        "qty": 1,
        "productName": "DYNAMIC BCAA"
    },
    {
        "_id": "639c19c57013b49915666d53",
        "image": "https://i.ibb.co/94BnTpt/product-2.png",
        "price": "16.54",
        "qty": 1,
        "productName": "Winner Whey"
    },
    {
        "_id": "639c19c57013b49915666d59",
        "image": "https://i.ibb.co/RQfmgyQ/product-7.png",
        "price": "16.54",
        "qty": 1,
        "productName": "HIGH POWER"
    },
    {
        "_id": "639c19c57013b49915666d63",
        "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
        "price": "16.54",
        "qty": 1,
        "productName": "ESSENTIALS"
    },
    {
        "_id": "639c19c57013b49915666d6a",
        "image": "https://i.ibb.co/hMf5TJq/product-12.png",
        "price": "16.54",
        "qty": 1,
        "productName": "Mass Gainer"
    },
    {
        "_id": "639c19c57013b49915666d60",
        "image": "https://i.ibb.co/pQFBWGb/product-3.png",
        "price": "16.54",
        "qty": 1,
        "productName": "100% WHEY"
    },
    {
        "_id": "639c19c57013b49915666d65",
        "image": "https://i.ibb.co/RQfmgyQ/product-7.png",
        "price": "16.54",
        "qty": 1,
        "productName": "HIGH POWER"
    },
    {
        "_id": "639c1b676990e1e92e57a04c",
        "productName": "Winner xyz",
        "image": "https://i.ibb.co/94BnTpt/product-2.png",
        "price": "16.54",
        "qty": 1
    },
    {
        "_id": "639c1bc0f39964668c6eff3f",
        "productName": "100% WHEY",
        "image": "https://i.ibb.co/pQFBWGb/product-3.png",
        "price": "16.54",
        "qty": 1
    },
    {
        "_id": "639c1c3a22c84d41319ec7b5",
        "productName": "100% WHEY",
        "image": "https://i.ibb.co/pQFBWGb/product-3.png",
        "price": "16.54",
        "qty": 1
    },
    {
        "_id": "63a08b761a4d8509953ed5fb",
        "productName": "New Product ",
        "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
        "price": "176",
        "qty": 1
    },
    {
        "_id": "63a15db44120b19377539236",
        "productName": "NEW PRODUCT ",
        "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
        "price": "205",
        "qty": 1
    },
    {
        "_id": "63a165864120b193775392f3",
        "productName": "NEW PRODUCT ",
        "image": "https://i.ibb.co/1bqh7Yx/product-5.png",
        "price": "205",
        "qty": 1
    },
    {
        "_id": "6491db40d7e1e52bac8da4fd",
        "productName": "New protien ",
        "image": "https://gymbro.vercel.app/static/media/img1.95d4c1e73c1d019ff4d6.png",
        "price": "500",
        "qty": 1
    },
    {
        "_id": "6492715e338b08959291cff6",
        "productName": "Protein ",
        "image": "https://i.ibb.co/mT0N794/product-8.png",
        "price": "300",
        "qty": 1
    },
    {
        "_id": "65c080bf795b91ecdc61917f",
        "productName": "local temp",
        "qty": 1
    },
    {
        "_id": "65c08122795b91ecdc619181",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08122795b91ecdc619183",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08122795b91ecdc619185",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08123795b91ecdc619189",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08123795b91ecdc61918b",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08123795b91ecdc61918d",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08123795b91ecdc61918f",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08122795b91ecdc619187",
        "productName": "local vocal ",
        "qty": 1
    },
    {
        "_id": "65c08203795b91ecdc619191",
        "productName": "",
        "qty": 1
    },
    {
        "_id": "65c08212795b91ecdc619193",
        "productName": "llll llll llllll llll",
        "qty": 1
    },
    {
        "_id": "65cf55533e55d2122c96856d",
        "productName": "fdg",
        "qty": 1
    },
    {
        "_id": "65cf55c73e55d2122c96859e",
        "productName": "dhaval",
        "qty": 1
    },
    {
        "_id": "66981608c205056d22cb235e",
        "productName": "Hubaish ka Protien ",
        "qty": 1
    }
]

  const DeleteProduct = (id)=>{
    dispatch(ACTION_DELETE_PRODUCT(id))
    .then((res)=> {
      dispatch(ACTION_ADD_PRODUCT)
      toast({
        title: "Product Deleted Successfull",
        status: "success",
        duration: 4000,
        isClosable: true,
      })
    })

  }

  return (
    <Box
      bgGradient="linear-gradient(180deg, rgba(0,0,0,1) 20%, rgba(64,64,64,1) 93%)"
      w="100%"
    >
      <Box maxW="1500px" m="auto">
        {/* Products  Tag*/}
        <Stack
         
          position={"relative"}
          overflow={"hidden"}
          justify={"center"}
          align={"center"}
          spacing={5}
          w="100%"
          // bg="#0078ff"

         minH={{base:"200px", lg:"300px", xl:"500px"}}
        >
          <Heading
           zIndex={2}
            color={"white"}
          
            fontSize={{ base: "4xl", md: "5xl", lg: "6xl" }}
            lineHeight={"110%"}
          >
            Products
          </Heading>

          <Breadcrumb color={"white"}>
            <BreadcrumbItem
              transition={"all .3s ease"}
              _hover={{ transform: "scale(1.08)" }}
            >
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                transition={"all .3s ease"}
                _hover={{ transform: "scale(1.08)" }}
                href="/our-services"
              >
                Products
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>

          <Image
          opacity={{base:"30%", md:"100%"}}
            overflow={"hidden"}
            position={"absolute"}
            
            src="https://i.ibb.co/94BnTpt/product-2.png"
            w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            right={0}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
            top="20px"
          />
          <Image
          opacity={{base:"30%", md:"100%"}}
            overflow={"hidden"}
            position={"absolute"}
            
            src="https://i.ibb.co/94BnTpt/product-2.png"
            w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            left={0}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
            top="20px"
          />
          <Image
        opacity={{base:"30%", md:"100%"}}
            overflow={"hidden"}
            position={"absolute"}
            
            w={{ base: "200px", md: "350px", lg: "400px", xl: "600px" }}
            left={0}
            transform={"scaleX(-1)"}
            //left={{ base: "-150px", md: "-15", lg: "-10" }}
            top="20px"
          />

          {/* <Image
          overflow={"hidden"}
          position={"absolute"}
          src={wave}
          //  w={{ base: "200px", md: "300px" }}
          bottom={0}
          
          
          height="50%"
          //left={{ base: "-150px", md: "-15", lg: "-10" }}
          // top="20px"
          backgroundImage="repeat-Y"
        /> */}
        </Stack>
        <Box>
          {/* products crouser */}

          <VStack maxW="1400px" m="auto">
            <SimpleGrid
              p={5}
              w="100%"
              spacing={{base:"3", md:5, lg:"10"}}
              columns={{ base: 2,  md: 3, lg: 4 }}
            >
              {productData?.map((item, index) => (
                <VStack
                 position={"relative"}
                  key={item._id}
                  boxShadow="rgba(0, 0, 0, 0.24) 0px 3px 8px"
                  borderRadius="10px"
                  maxW="xs"
               
                  bg="whiteAlpha.300"
                  // _dark={{
                  //   bg: "gray.800",
                  // }}
                  shadow="lg"
                  rounded="lg"
                  z-index={-1}
                
               
                >
                  <Box p={{base:"2", md:"2", lg:"3"}} >
                    <chakra.h1
                      color="white"
                      _dark={{
                        color: "white",
                      }}
                      fontWeight="bold"
                      fontSize={{base:"xl", md:"xl", lg:"3xl"}}
                      textTransform="uppercase"
                    >
                      {item.productName}
                    </chakra.h1>
                    <chakra.p
                   
                      fontSize="sm"
                      color="white"
                      _dark={{
                        color: "gray.400",
                      }}
                      z-index={2}
                    >
                      Lorem ipsum dolor sit amet consectetur
                    </chakra.p>
                  </Box>
                  <Box w="100%"  >
                    <Link to={`/products/${item._id}`}>
                      <Image
                     
                       
                        fit="cover"
                   
                        // src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=320&q=80"
                        src={item.image}
                        alt="NIKE AIR"
                      />
                    </Link>
                  </Box>
                  <Spacer/>
                  <HStack 
                  w="100%"
                
                    alignSelf={"flex-end"}
                    alignItems="center"
                    justifyContent="space-between"
                    px={4}
                    py={2}
                    // bg="gray.900"
                    roundedBottom="lg"
                  >
                    <chakra.h1 color="white" fontWeight="bold" fontSize="lg">
                      ${item.price}
                    </chakra.h1>

                    {
                      AdminIsAuth ?  <IconButton
                      
                     p="0px 20px"
                      // bg="white"
                      fontSize="3xl"
                      onClick={()=>DeleteProduct(item._id)} 
                     color="white"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "white",
                        color: "#f45f02;",
                      }}
                      // _focus={{
                      //   bg: "gray.400",
                      // }}
                      bg="#f45f02;"
                      icon={<RiDeleteBinLine/>}
                    />
                      : <Link to={`/products/${item._id}`}>
                    <chakra.button
                     
                      px={4}
                      py={3}
                      // bg="white"
                      fontSize="xs"
                      color="white"
                      fontWeight="bold"
                      rounded="lg"
                      textTransform="uppercase"
                      _hover={{
                        bg: "white",
                        color: "#f45f02;",
                      }}
                      // _focus={{
                      //   bg: "gray.400",
                      // }}
                      bg="#f45f02;"
                    >
                      View
                    </chakra.button>  </Link> 
                    }
                   
                  </HStack>
                </VStack>
              ))}
            </SimpleGrid>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
