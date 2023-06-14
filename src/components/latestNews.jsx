import { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, getDocs, query, orderBy, limit } from "firebase/firestore";
import LatestNewsBox from "./latestNewsBox";

export default function LatestNews() {
    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "news");
    const q = query(newsCollectionRef, orderBy("date", "desc"), limit(4));
    useEffect(() => {
        const getNews = async () => {
            // const data = await getDocs(newsCollectionRef);
            // setNews(data.docs.map(doc => ({
            //     ...doc.data(),
            //     id: doc.id,
            // })));
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => doc.data());
            setNews(data);
        };
        getNews();
    }, []);

    return (
        <div>
            {news.map((item, index) => (
                <div key={index}>
                    {/* <h2>{item.title}</h2>
                    <p>{item.body}</p>
                    <img src={item.image} alt={item.title} /> */}
                    
                <LatestNewsBox title={item.title} img={item.img} />
                </div>
            ))}
        </div>
    );
}