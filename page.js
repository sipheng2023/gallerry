import Image from "next/image";

export default function Home() {
  const images = [
    { src: "/images/django.png", alt: "Image 1" },
    { src: "/images/html4.jpg", alt: "Image 2" },
    { src: "/images/html5.jpg", alt: "Image 3" },
    { src: "/images/node.png", alt: "Image 4" },
  ];

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Gallery App</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {images.map((image, index) => (
          <div key={index} style={{ border: "1px solid #ddd", padding: "10px" }}>
            <a href={image.src} target="_blank" rel="noopener noreferrer">
              <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={150}
                style={{ objectFit: "cover", borderRadius: "8px" }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
