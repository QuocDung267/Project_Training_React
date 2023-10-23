import { useEffect, useState } from "react";
import "./styles.css";
const tabs = ["posts", "comments", "albums", "photos", "todos", "users"];
export default function App() {
  const [type, setType] = useState("posts");
  const [post, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((res) => res.json())
      .then((post) => setPost(post));
  }, [type]);
  return (
    <>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={type === tab ? { color: "#fff", background: "red" } : {}}
          onClick={() => {
            setType(tab);
          }}
        >
          {tab}
        </button>
      ))}
      {post.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </>
  );
}
