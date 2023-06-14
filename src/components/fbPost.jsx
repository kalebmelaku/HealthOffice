import { useEffect } from "react";

export default function FacebookPost() {
    const iframe = {
        border: 'none',
        overflow: 'hidden',
        marginRight: '0',
        maxWidth: '100%',
    };

    window.onload = () => { 
        setTimeout(() => {
            const content = document.querySelector('iframe');
            console.log(content);
        }, 5000)
    }

    return (
        <>
            <h2 className="my-6 text-3xl text-center font-bold">Latest News</h2>
            <div id="news" className="max-w-[1240px] mx-auto p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FsomaliHealthBureau&tabs=timeline&width=500&height=500&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
                    width="500"
                    height="500"
                    style={iframe}
                    // scrolling="no" frameBorder="0"
                    loading="lazy"
                    allowFullScreen={true}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <div className="w-full p-4">
                    <h1>Hello</h1>
                </div>
            </div>
        </>
    );
}