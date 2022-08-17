import React from "react";
 import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
 import {
   Feather,
   Ionicons,
   FontAwesome,
   Entypo,
   MaterialCommunityIcons,
   AntDesign,
 } from "@expo/vector-icons";

 const LayoutOne = () => {
   return (
     <View style={styles.container}>
       <View
         style={{
           flex: 2,
           flexDirection: "row",
           justifyContent: "space-between",
           alignItems: "center",
           paddingHorizontal: 16,
         }}
       >
         <View>
           <Feather name="menu" size={34} color="black" />
         </View>

         <View
           
         >
           
         </View>
       </View>

       <View
         style={{
           flex: 2,
           alignItems: "center",
           justifyContent: "space-evenly",
         }}
       >
         <View
           style={{
             height: 180,
             width: 180,
             borderRadius: 100,
             overflow: "hidden",
           }}
         >
           <Image
             source={{
               uri: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
             }}
             style={{ height: "100%", width: "100%", resizeMode: "cover" }}
           />

         </View>
         
       </View>





       <View
         style={{
           flex: -12,
           alignItems: "center",
           justifyContent: "center",
           
         }}
       >
         <View
           style={{
             height: 30,
             width: 37,
             borderRadius: 100,
             overflow: "hidden",
           }}
         >
       <Image
             source={{
       uri: "https://img.favpng.com/24/18/8/computer-icons-upload-download-portable-network-graphics-png-favpng-jfCgdXAE6abyXzwY80T5MiDjF.jpg"
    }}
    style={{ height: "100%", width: "100%", resizeMode: "side" }}
  />
  </View>
         
         </View>




       <View
         style={{
           flex: 6,
           justifyContent: "space-between",
         }}
       >
         <View
           style={{
             height: "57%",
             backgroundColor: "white",
             borderRadius: 20,
           }}
         >
           <View style={{ flex: 2, flexDirection: "row" }}>
             <View
               style={{
                 flex: 3,
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "space-evenly",
               }}
             >

                 <View>
             <Text style={{ fontSize: 11, color: "gray" }}>School</Text>
               <Text style={{ fontSize: 16, color: "black" }}>
                The Cloverstar University
               </Text>
               </View>
             </View>

             <View
               style={{
                 flex: 1,
                 alignItems: "flex-end",
                 padding: 32,
               }}
             >
              
             </View>
           </View>
           <View
             style={{
               flex: 2,
               flexDirection: "row",
             }}
           >
             <View
               style={{
                flex: 3,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
               }}
             >

<View>
             <Text style={{ fontSize: 11, color: "gray" }}>Email</Text>
               <Text style={{ fontSize: 16, color: "black" }}>
                Annlee.clover@gmail.com
                </Text>
               </View>
             </View>

             <View
               style={{
                 flex: 1,
                 alignItems: "flex-end",
                 padding: 32,
               }}
             >
              
             </View>
           </View>
           <View
             style={{
               flex: 2,
               flexDirection: "row",
             }}
           >
             <View
               style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-evenly",
               }}
             >
<View>
             <Text style={{ fontSize: 11, color: "skyblue", fontWeight: "bold" }}>Name</Text>
               <Text style={{ fontSize: 16, color: "black" }}>
                Ann lee
               </Text>
               </View>
             </View>
                    
                    
                    <View
               style={{
                 flex: 2,
                 alignItems: "flex-end",
                 padding: 32,
               }}
             >
             </View>
           </View>
         </View>



         <View
           style={{
             height: "47%",
             backgroundColor: "white",
             borderRadius: 20,
           }}
         >
           <View style={{ flex: 1, flexDirection: "row" }}>
             <View
               style={{
                 flex: 1,
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "space-evenly",
               }}
             >

                 <View>
                 <Text style={{ fontSize: 11, color: "skyblue", fontWeight: "bold" }}>Nick Name</Text>
               <Text style={{ fontSize: 16, color: "black" }}>
                l.Ann
               </Text>
               </View>
             </View>

             <View
               style={{
                 flex: 2,
                 alignItems: "flex-end",
                 padding: 32,
               }}
             >
              
             </View>
           </View>
           <View
           style={{
             height: "48%",
             backgroundColor: "white",
             borderRadius: 20,
           }}
         >
           <View style={{ flex: 2, flexDirection: "row" }}>
             <View
               style={{
                 flex: 2,
                 flexDirection: "row",
                 alignItems: "center",
                 justifyContent: "space-evenly",
               }}
             >

                 <View>
                 <Text style={{ fontSize: 11, color: "skyblue", fontWeight: "bold" }}>Emergency Contact</Text>
               <Text style={{ fontSize: 16, color: "black" }}>
                +1 086 975 985
               </Text>
               </View>
             </View>

             <View
               style={{
                 flex: 2,
                 alignItems: "flex-end",
                 padding: 32,
               }}
             >
              
             </View>
           </View>
        </View>
    </View>
    </View>
        

       <View
         style={{
           flex: 1,
           flexDirection: "row",
           alignItems: "center",
           justifyContent: "space-evenly",
         }}
       >
        
        <TouchableOpacity 
            style={{ 
             padding: 24,
            backgroundColor: "blue",
             borderRadius: 230,
            
        }}
 >
        <Text style={{ fontSize: 14, color: "white", fontWeight: "bold" }}>UPDATE PROFILE</Text> 
        </TouchableOpacity>
    
       </View>
    </View>
    
     
   );
 };

        

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     paddingHorizontal: 16,
   },
 });

 export default LayoutOne;