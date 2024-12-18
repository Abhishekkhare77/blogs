import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="bg-gray-100 py-12 md:py-16 lg:py-20">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div>
              <img
                src="/placeholder.svg"
                width={800}
                height={500}
                alt="Featured Post"
                className="rounded-lg object-cover"
                style={{ aspectRatio: "800/500", objectFit: "cover" }}
              />
            </div>
            <div className="space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Link
                  href="#"
                  className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium"
                  prefetch={false}
                >
                  Technology
                </Link>
                <h2 className="text-3xl md:text-4xl font-bold">
                  The Future of Web Development: Trends and Insights
                </h2>
                <div className="flex items-center gap-4 text-gray-500 text-sm">
                  <div>John Doe</div>
                  <div>•</div>
                  <div>April 21, 2023</div>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">
                Explore the latest trends and insights shaping the future of web
                development, from emerging technologies to best practices for
                building modern web applications.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 font-medium text-gray-900 hover:text-gray-700"
                prefetch={false}
              >
                Read More
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-16 lg:py-20">
          <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">Recent Posts</h2>
              <Link
                href="#"
                className="text-gray-900 hover:text-gray-700 font-medium"
                prefetch={false}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
              <div className="space-y-4">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Post Image"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium"
                    prefetch={false}
                  >
                    Design
                  </Link>
                  <h3 className="text-xl font-bold">
                    Designing for Accessibility: Best Practices and Principles
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div>Jane Smith</div>
                    <div>•</div>
                    <div>April 15, 2023</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Post Image"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium"
                    prefetch={false}
                  >
                    Development
                  </Link>
                  <h3 className="text-xl font-bold">
                    Mastering React Hooks: A Comprehensive Guide
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div>John Doe</div>
                    <div>•</div>
                    <div>April 10, 2023</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <img
                  src="/placeholder.svg"
                  width={600}
                  height={400}
                  alt="Post Image"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "600/400", objectFit: "cover" }}
                />
                <div className="space-y-2">
                  <Link
                    href="#"
                    className="inline-block bg-gray-800 text-white px-3 py-1 rounded-full text-xs font-medium"
                    prefetch={false}
                  >
                    Productivity
                  </Link>
                  <h3 className="text-xl font-bold">
                    Boost Your Productivity: Proven Strategies and Tools
                  </h3>
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <div>Jane Doe</div>
                    <div>•</div>
                    <div>April 5, 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <aside className="bg-gray-100 border-t py-12 md:py-16 lg:py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900"
                    prefetch={false}
                  >
                    Technology
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900"
                    prefetch={false}
                  >
                    Design
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900"
                    prefetch={false}
                  >
                    Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900"
                    prefetch={false}
                  >
                    Productivity
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-700 hover:text-gray-900"
                    prefetch={false}
                  >
                    Lifestyle
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Search</h3>
              <form>
                <div className="relative">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                  <Input
                    type="text"
                    placeholder="Search blog posts..."
                    className="w-full bg-white border border-gray-300 rounded-md py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h3 className="text-xl font-bold mb-4">Popular Posts</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <img
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">
                      Unlocking the Power of CSS Grid: A Comprehensive Guide
                    </h4>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div>John Doe</div>
                      <div>•</div>
                      <div>April 1, 2023</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">
                      Mastering JavaScript Promises: A Step-by-Step Guide
                    </h4>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div>Jane Smith</div>
                      <div>•</div>
                      <div>March 25, 2023</div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <img
                    src="/placeholder.svg"
                    width={100}
                    height={100}
                    alt="Post Image"
                    className="rounded-lg object-cover"
                    style={{ aspectRatio: "100/100", objectFit: "cover" }}
                  />
                  <div className="space-y-2">
                    <h4 className="text-lg font-bold">
                      Designing for Inclusivity: Principles and Best Practices
                    </h4>
                    <div className="flex items-center gap-4 text-gray-500 text-sm">
                      <div>Jane Doe</div>
                      <div>•</div>
                      <div>March 15, 2023</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-700 mb-4">
                Subscribe to our newsletter to stay up-to-date with the latest
                blog posts and news.
              </p>
              <form className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-white border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                />
                <Button
                  type="submit"
                  className="bg-gray-900 text-white rounded-md py-2 px-4 hover:bg-gray-800"
                >
                  Subscribe
                </Button>
              </form>
            </div>
          </div>
        </div>
      </aside>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-8 lg:px-12">
        <div className="container mx-auto flex items-center justify-between">
          <p className="text-sm">&copy; 2024 Blog. All rights reserved.</p>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#" className="hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline" prefetch={false}>
              Terms of Service
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function PenIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
