export default function About() {
    return (
        <>

            <div id="about" className="about max-w-[1240px] mx-auto  md:px-6 py-5 px-4">
                <h1 className="text-3xl lg:text-4xl text-center font-bold leading-9 text-gray-800 mb-8 pb-4">About Us</h1>
                <div className="flex flex-col lg:flex-row justify-between gap-16">
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">

                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            Somali Regional Health Bureau (SRHB) is the government agency
                            responsible for providing healthcare services to the Somali Region of Ethiopia. The SRHB
                            has a network of hospitals, health centers, and health posts that provide a range of services</p>
                        <p className="font-normal mt-2 text-base leading-6 text-gray-600 ">
                            The SRHB also works to improve the quality of healthcare services through training and capacity
                            building for healthcare workers, and by providing essential medicines and supplies.</p>
                    </div>
                    <div className="w-full overflow-hidden lg:w-8/12">
                        <img className="w-full h-full" src="https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/350805475_177709061926317_3807789273933245689_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=thml-T3mMt4AX_zJjGw&_nc_ht=scontent.fadd1-1.fna&oh=00_AfAfNqG3L7hvs57WuphirHMGbxuqfx_Qp8n9r-zj26VCoQ&oe=648D9233" alt="A group of People" />
                    </div>
                </div>
                <div className="flex flex-col-reverse mt-24 lg:flex-row justify-between gap-16">
                    <div className="w-full overflow-hidden lg:w-8/12">
                        <img className="w-full h-full" src="https://scontent.fadd1-1.fna.fbcdn.net/v/t39.30808-6/350805475_177709061926317_3807789273933245689_n.jpg?stp=cp6_dst-jpg&_nc_cat=110&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=thml-T3mMt4AX_zJjGw&_nc_ht=scontent.fadd1-1.fna&oh=00_AfAfNqG3L7hvs57WuphirHMGbxuqfx_Qp8n9r-zj26VCoQ&oe=648D9233" alt="A group of People" />
                    </div>
                    <div className="w-full lg:w-5/12 flex flex-col justify-center">

                        <p className="font-normal text-base leading-6 text-gray-600 ">
                            the SRHB has made significant progress in improving the health of the
                            Somali Region. In recent years, there has been a decrease in the number
                            of deaths from communicable diseases, and an increase in the number of
                            children who are vaccinated. The SRHB is committed to continuing to improve
                            the health of the Somali Region, and to providing quality healthcare services
                            to all members of the community.</p>
                        <p className="font-normal mt-2 text-base leading-6 text-gray-600 ">
                            The Somali Region Health Bureau is committed to providing quality healthcare services to all
                            members of the community. The SRHB is working to improve the health of the Somali Region </p>
                    </div>
                </div>


            </div>

        </>
    );
}