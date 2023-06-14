export default function LatestNewsBox(props) {
    const title = props.title;
    const img = props.img;
    return (
        <>
          
                <div
                    className="latest-news md:flex md:flex-row mb-4 block rounded-lg bg-white p-0 shadow-lg text-black">
                   
                        <div
                            className="img-cont mx-auto flex items-center justify-center md:mx-0 lg:mb-0">
                            <img
                                src={img}
                                className="w-full h-full shadow-md dark:shadow-black/30"
                                alt="" />

                        </div>
                        <div className="text-cont md:ml-6 flex items-center">
                            <p
                                className="mb-6 font-light">
                                {title} 
                            </p>
                        </div>
                    </div>
            
           
        </>
    );
}