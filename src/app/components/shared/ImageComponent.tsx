import React from "react";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import JsonPlaceHolderApiTypes from "@/app/types/JsonPlaceHolderApiTypes";
import fetchimages from "@/app/services/api/ImageFetch";
import Image from "next/image";

type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

const fetchData = async (): Promise<Photo[]> => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?limit=10",
    { cache: "no-store" }
  );
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  return res.json();
};

const ImageComponent = async () => {
  const photos = await fetchData();

  return (
    <main>
      <h1>Photos</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {photos.map((photo) => (
          <div key={photo.id} style={{ margin: "10px" }}>
            <img
              src={photo.thumbnailUrl}
              alt={photo.title}
              style={{
                borderRadius: "8px",
                boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              }}
            />
            <h1 className="text-yellow-50">{photo.title}</h1>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ImageComponent;
