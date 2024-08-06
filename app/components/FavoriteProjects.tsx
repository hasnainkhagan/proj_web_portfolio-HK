import Image from "next/image";
import { ProjectsCard } from "../lib/interface";
import { client } from "../lib/sanity";

async function getData() {
  const query = `*[_type == 'project'] | order(_createdAt desc) [0...2] {
        title,
          _id,
          link,
          description,
          tags,
          "imageUrl": image.asset->url
        
    }`;

  const data = await client.fetch(query, {}, { next: { revalidate: 30 } });

  return data;
}

export async function FavoriteProjects() {
  const data: ProjectsCard[] = await getData();

  console.log(data);
  return (
    <div className="py-10 grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12 grid-cols-1">
      {data.map((item) => (
        <a
          href={item.link}
          key={item._id}
          className="group block"
          target="_blank"
        >
          <div className="aspect-w-16 aspect-h-12 overflow-hidden rounded-[2em] relative">
            <Image
              src={item.imageUrl}
              alt="IMG Description"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-2xl bg-gray-200"
            />
          </div>
          <div className="mt-4">
            <h2 className="font-medium text-lg hover:underline">
              {item.title}
            </h2>
            <p className="mt-1 text-muted-foreground line-clamp-3">
              {item.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {item.tags.map((tagItem, index) => (
                <span
                  className="inline-flex items-center rounded-md bg-primary/10 px-3 py-1.5 text-xs sm:text-sm font-medium text-primary ring-2 ring-inset ring-primary/20"
                  key={index}
                >
                  {tagItem}
                </span>
              ))}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
