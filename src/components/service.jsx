import ServiceBox from "./serviceBox";
import { useEffect, useState } from "react";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../config/firebase";

export default function Service() {
   const [service, setService] = useState([]);
   const newsCollectionRef = collection(db, "services");
   const q = query(newsCollectionRef);
   useEffect(() => {
      const getNews = async () => {
         // const data = await getDocs(newsCollectionRef);
         // setNews(data.docs.map(doc => ({
         //     ...doc.data(),
         //     id: doc.id,
         // })));
         const snapshot = await getDocs(q);
         const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
         }));
         setService(data);
      };
      getNews();
   }, []);
   return (
      <>
         <div className="services mt-10">
            <section id="services" className="max-w-[1240px] px-3 mx-auto py-10  lg:pb-[90px]">
               <div className="container mx-auto">
                  <div className="-mx-4 flex flex-wrap">
                     <div className="w-full px-4">
                        <div className="mx-auto mb-12 pt-3 max-w-[510px] text-center lg:mb-10">
                           <h2 className="mb-6 text-3xl text-center font-bold">Our Services</h2>
                        </div>
                     </div>
                  </div>
                  <div className="-mx-4 flex flex-wrap">
                     {service.map((item) => (
                        <>
                           <ServiceBox
                              title={item.title}
                              body={item.desc}
                           />
                        </>
                     ))}


                  </div>
               </div>
            </section>
         </div>
      </>
   );
}