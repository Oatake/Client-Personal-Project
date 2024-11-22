// import React, { useEffect, useState } from "react";
// import useUserStore from "../Stores/user-store";
// import axios from "axios";
// import { Navigate } from 'react-router-dom'

// export default function ProtectRoutes(props) {
//   const [isAllowed, setIsAllowed] = useState(null);
//   const { element, allow } = props;
//   const role = useUserStore((state) => state.role);
//   const token = useUserStore((state) => state.token);
//   const checkPermission = async () => {
//     try {
//       const getme = await axios.get("http://localhost:8000/auth/getme/", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       const role = {
//         isAdmin: getme.data.userRole.isAdmin,
//         isButler: getme.data.userRole.isButler,
//         isKitchenHand: getme.data.userRole.isKitchenHand,
//         isReception: getme.data.userRole.isReception,
//       };

//       const checkAllow = allow.map((el) => {
//         console.log(role[el])
//         if (role[el] === true) {
//           setIsAllowed(true);
//         }
//       });
//       if(isAllowed === null){
//         setIsAllowed(false);
//       }
//     } catch (error) {
//       console.log(err);
//       setIsAllowed(false);
//     }
//   };
//   useEffect(() => {
//     checkPermission();
//   }, []);
//   if (isAllowed === null) {
//     return <div>Loading.....</div>;
//   }
//   if (!isAllowed) {
//     return <Navigate to={"/unauthorized"} />;
//   }
//   return (element)
// }
