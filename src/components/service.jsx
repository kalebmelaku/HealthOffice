import ServiceBox from "./serviceBox";
import { FaChild, FaDisease, FaNutritionix, FaVirusSlash } from 'react-icons/fa'
import { RiMentalHealthFill } from 'react-icons/ri'
import { MdFamilyRestroom } from 'react-icons/md'
import {AiFillEnvironment} from 'react-icons/ai'

export default function Service() {
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

                  <ServiceBox
                     title="Maternity and child care"
                     body="Provides care for pregnant women, mothers, and children, including prenatal care, childbirth, and postnatal care."
                     icon={<FaChild />}
                     />
                     
                  <ServiceBox
                     title="Communicable disease control"
                     body="Prevents and controls the spread of communicable diseases, such as HIV/AIDS, malaria, and tuberculosis"
                     icon= {<FaDisease/>}   
                  />
                  <ServiceBox
                     title="Nutrition"
                     body="Provides nutrition education and counseling, and supplements to improve the nutritional status of children and pregnant women." 
                     icon= {<FaNutritionix/>}   
                     />
                     
                  <ServiceBox
                     title="Mental health"
                     body="Provides mental health services, such as counseling and therapy, to people with mental health problems." 
                     icon= {<RiMentalHealthFill/>}   
                     />
                     
                  <ServiceBox
                     title="Family planning"
                     body="Provides family planning services, such as contraception and counseling, to help people plan their families." 
                     icon= {<MdFamilyRestroom/>}   
                     />
                     
                  <ServiceBox
                     title="Environmental health"
                     body="Promotes healthy living environments by providing safe water, sanitation, and waste disposal services." 
                     icon= {<AiFillEnvironment/>} 
                     />
                     
                  <ServiceBox
                     title="HIV/AIDS prevention and treatment"
                     body="Provides HIV/AIDS prevention and treatment services, such as counseling, testing, and antiretroviral therapy." 
                     icon={<FaVirusSlash/>}
                     />
                     
               </div>
            </div>
            </section>
            </div>
      </>
   );
}