import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { collection, getDoc, getDocs, doc, query, orderBy, limit } from "firebase/firestore";
import { db } from "../config/firebase";
import Navbar from "../components/NavBar";
import Footer from "../components/footer";
import LatestNewsBox from "../components/latestNewsBox";
export default function NewsDetail() {
    const [latestNews, setLatestNews] = useState([]);
    const [news, setNews] = useState([]);
    const location = useLocation();
    const id = new URLSearchParams(location.search).get('id');

    const newsCollectionRef = collection(db, "news");
    const q = query(newsCollectionRef, orderBy("date", "desc"), limit(4));


    const newsRef = doc(db, 'news', id);
    useEffect(() => {
        document.title = "News";
        const getNews = async () => {
            const docSnap = await getDoc(newsRef);
            setNews(docSnap.data());

            const snapshot = await getDocs(q);
            const data = snapshot.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setLatestNews(data);
        };
        getNews();
    }, []);

    return (
        <>
            <Navbar />
            <div className="hero-section">
                <img className="w-full mb-16 h-1/2" src={news.img} alt="" />
                <div className="container mx-auto">
                    <h1 className="text-2xl px-2">{news.title}</h1>
                </div>
            </div>
            <div className="content container mx-auto p-2">
                {/* <p className="lead text-lg mt-4 py-4"></p> */}

                {/* <p className="main mt-4 text-xl">{body}</p> */}
                {news.body && news.body.split('.').map((sentence, index) => (
                    <p key={index} className="main mt-4 text-xl">{sentence.trim()}</p>
                ))}
            </div>
            <div className="container mx-auto px-2">
                <h3 className="text-center my-8 text-2xl">Similar Posts</h3>
                {latestNews.map((item) => (
                    <div key={item.id} className="similar-posts">
                        <LatestNewsBox id={item.id} title={item.title} />
                    </div>
                ))}
            </div>
            <Footer />
        </>
    );
}