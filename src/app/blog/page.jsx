import Link from "next/link"
import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from "@/components/ui/pagination"

export default function Component() {
    return (
        <div className="bg-background text-foreground">
            <main className="container mx-auto py-12 px-4 md:px-6">
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View post</span>
                        </Link>
                        <img
                            src="/placeholder.svg"
                            alt="Blog post thumbnail"
                            width={400}
                            height={225}
                            className="h-48 w-full object-cover transition-all group-hover:scale-105"
                            style={{ aspectRatio: "400/225", objectFit: "cover" }}
                        />
                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-semibold line-clamp-2">
                                Introducing the Frontend Cloud: Faster Iteration, More Innovation
                            </h3>
                            <p className="line-clamp-2 text-muted-foreground">
                                Discover how the frontend cloud can help your team focus on shipping features instead of managing
                                infrastructure.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div>Vercel</div>
                                <div>•</div>
                                <div>June 1, 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View post</span>
                        </Link>
                        <img
                            src="/placeholder.svg"
                            alt="Blog post thumbnail"
                            width={400}
                            height={225}
                            className="h-48 w-full object-cover transition-all group-hover:scale-105"
                            style={{ aspectRatio: "400/225", objectFit: "cover" }}
                        />
                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-semibold line-clamp-2">Mastering Serverless with Next.js 13</h3>
                            <p className="line-clamp-2 text-muted-foreground">
                                Explore the power of serverless with Next.js 13 and learn how to build scalable and efficient web
                                applications.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div>Delba</div>
                                <div>•</div>
                                <div>May 15, 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View post</span>
                        </Link>
                        <img
                            src="/placeholder.svg"
                            alt="Blog post thumbnail"
                            width={400}
                            height={225}
                            className="h-48 w-full object-cover transition-all group-hover:scale-105"
                            style={{ aspectRatio: "400/225", objectFit: "cover" }}
                        />
                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-semibold line-clamp-2">Introducing v0: Generative UI</h3>
                            <p className="line-clamp-2 text-muted-foreground">
                                Discover the power of Generative UI and how it can revolutionize your web development workflow.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div>Vercel</div>
                                <div>•</div>
                                <div>April 20, 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View post</span>
                        </Link>
                        <img
                            src="/placeholder.svg"
                            alt="Blog post thumbnail"
                            width={400}
                            height={225}
                            className="h-48 w-full object-cover transition-all group-hover:scale-105"
                            style={{ aspectRatio: "400/225", objectFit: "cover" }}
                        />
                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-semibold line-clamp-2">Building Accessible Web Applications with React</h3>
                            <p className="line-clamp-2 text-muted-foreground">
                                Learn how to create inclusive and accessible web applications using React and best practices.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div>Lee Robinson</div>
                                <div>•</div>
                                <div>March 28, 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View post</span>
                        </Link>
                        <img
                            src="/placeholder.svg"
                            alt="Blog post thumbnail"
                            width={400}
                            height={225}
                            className="h-48 w-full object-cover transition-all group-hover:scale-105"
                            style={{ aspectRatio: "400/225", objectFit: "cover" }}
                        />
                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-semibold line-clamp-2">Optimizing Web Performance with Next.js</h3>
                            <p className="line-clamp-2 text-muted-foreground">
                                Discover techniques to improve the performance of your Next.js applications and deliver a lightning-fast
                                user experience.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div>Delba</div>
                                <div>•</div>
                                <div>February 10, 2023</div>
                            </div>
                        </div>
                    </div>
                    <div className="group relative overflow-hidden rounded-lg shadow-sm transition-all hover:shadow-md">
                        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                            <span className="sr-only">View post</span>
                        </Link>
                        <img
                            src="/placeholder.svg"
                            alt="Blog post thumbnail"
                            width={400}
                            height={225}
                            className="h-48 w-full object-cover transition-all group-hover:scale-105"
                            style={{ aspectRatio: "400/225", objectFit: "cover" }}
                        />
                        <div className="space-y-2 p-4">
                            <h3 className="text-xl font-semibold line-clamp-2">
                                Scaling Your Vercel Applications with Serverless Functions
                            </h3>
                            <p className="line-clamp-2 text-muted-foreground">
                                Learn how to leverage Vercel serverless functions to scale your applications and handle increased
                                traffic.
                            </p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div>Lee Robinson</div>
                                <div>•</div>
                                <div>January 5, 2023</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-12 flex justify-center">
                    <Pagination>
                        <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#" isActive>
                                    2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">3</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationNext href="#" />
                            </PaginationItem>
                        </PaginationContent>
                    </Pagination>
                </div>
            </main>
        </div>
    )
}