import { getAllBlogs } from "@/utils/mdx";
import Link from "next/link";
import React from "react";
import { BlogIcon } from "./icons/general";

export const LandingBlogs = async () => {
  const allBlogs = await getAllBlogs();

  const truncate = (str: string, length: number) => {
    return str.length > length ? str.substring(0, length) + "..." : str;
  };
  return (
    <div>
      <div className="px-4">
        <div className="text-md leading-snug text-subdued">Blogs</div>
        <div className="mt-4">
          {allBlogs.slice(-3).map((blog, idx) => (
            <Link
              key={idx}
              href={`/blog/${blog.slug}`}
              className="block mt-5 mb-6 group"
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex gap-2 items-center">
                  <BlogIcon className="w-5 h-5 text-subdued/60 group-hover:text-subdued" />
                  <h2 className="text-md font-medium text-default group-hover:text-black">
                    {blog?.title}
                  </h2>
                </div>
                <p className="text-subdued/40 group-hover:text-subdued text-sm">
                  {blog.date}
                </p>
              </div>
              <p className="text-sm text-subdued">
                {truncate(blog?.description || "", 150)}
              </p>
            </Link>
          ))}
        </div>
        <div className="flex items-center justify-end mt-4">
          <Link
            href={"/blog"}
            className="text-md text-subdued hover:text-default cursor-pointer"
          >
            See more
          </Link>
        </div>
      </div>
    </div>
  );
};
