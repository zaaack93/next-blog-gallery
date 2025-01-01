import { UnsplashImage } from "@/models/unsplash-image";
import Image from "next/image";
import { Alert } from '@/components/bootstrap';

export const metadata = {
    title:"Static Fetching - NextJs Image Gallery",
    description: "Static Fetching"
}

export default async function Page() {
    const response = await fetch('https://api.unsplash.com/photos/random?client_id='+ process.env.UNSPLASH_ACCESS_KEY);
    const image:UnsplashImage = await response.json();
    if (!image || image.errors)  return <div>Image not found</div>;

    const width = Math.min(500, image.width);
    const height = (width / image.width) * image.height;

    return (
        <div className="d-flex flex-column align-items-center">
        <Alert>
            this page <strong>Fetches and cahces data at build time.</strong> Even though the Unsplash API always returns a new image, we see the same image after refreshing the page until we compile the project again.
        </Alert>
        
        <Image src={image.urls.raw} alt={image.description} width={width} height={height} className="rounded shadow mw-100 h-100"/>
        <div>
            <p>Photo by {image.user.username}</p>
            <p>
                <a href={image.urls.raw} target="_blank" rel="noreferrer">View on Unsplash</a>
            </p>
        </div>   

        </div>
    );
}