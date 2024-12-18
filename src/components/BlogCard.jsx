import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Link from "next/link"

export default function BlogCard() {
    return (
        <Card>
            <CardContent className="p-4 md:p-6">
                <div className="grid gap-4 items-start md:items-center">
                    <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Article</p>
                        <h2 className="text-xl font-bold leading-6">Taxing Laughter: The Joke Tax Chronicles</h2>
                        <p className="text-base text-gray-500 dark:text-gray-400">
                            Once upon a time, in a far-off land, there was a very lazy king who spent all day lounging on his throne.
                            One day, his advisors came to him with a problem: the kingdom was running out of money.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
                            alt="Avatar"
                            width={32}
                            height={32}
                            className="rounded-full"
                            style={{ aspectRatio: "32/32", objectFit: "cover" }}
                        />
                        <div className="space-y-0.5">
                            <p className="text-sm font-medium">Jane Cooper</p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">August 24, 2023</p>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter className="p-4 md:p-6">
                <Link href="#" className="btn btn-outline btn-sm w-full md:w-auto text-sm" prefetch={false}>
                    Read
                </Link>
            </CardFooter>
        </Card>
    )
}