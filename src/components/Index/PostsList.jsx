"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const flexStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
}

export default function PostsList({ posts }) {
  // Search bar
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Search bar
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Search bar
  useEffect(() => {
    const results = posts.filter((post) =>
      post.data.title
        .toLowerCase()
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .replace(/\s+/g, "")
        .includes(
          searchTerm
            .toLowerCase()
            .replace(/[^a-zA-Z0-9 ]/g, "")
            .replace(/\s+/g, "")
        )
    );
    setSearchResults(results);
  }, [searchTerm]);

  // Search bar
  const postsToDisplay = searchTerm.length < 1 ? posts : searchResults;

  return (
    <div 
      style={{
        ...flexStyle,
        maxWidth: "800px",
        padding: "0 16px",
        paddingTop: "32px",
      }}
    >
      <div
        style={{
          // Fixed w 100% of parent
          width: "100%",
        }}
      >
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleChange}
          id={"search-bar"}
        />
      </div>

      <div>
        <div
          style={{
            ...flexStyle,
            listStyle: "none",
            padding: "0",
            margin: "0",
            flex: 1,
            maxWidth: "700px",
          }}
        >
          {postsToDisplay.map((post) => (
            <div key={post.filePath} id={"post-list-object"}
              style={{
                backgroundColor: "white",
                padding: "16px",
                margin: "16px",
                borderRadius: "10px",
                flex: 1,
                display: "flex",
                flexDirection: "row",
                gap: "16px",
              }}
            >
              <div>
                <Image
                  src={post.data.cover}
                  alt="Logo"
                  width={150}
                  height={150}
                  id={"post-list-image"}
                />
              </div>
              <div>
                <div>
                  <Link
                    as={`/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
                    href={`/posts/[slug]`}
                  >
                    {post.data.title}
                  </Link>
                </div>
                <div>
                  <p>{post.data.description}</p>
                </div>
                <div>
                  <p>{post.data.date}</p>
                </div>
                <div>
                  <p>by {post.data.author}</p>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    </div>
  );
}
