
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

export default function SearchBar() {
    return (
        <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="search" placeholder="Search..." className="rounded-lg" />
            <Button type="submit" className="rounded-lg">
                <Search className="w-4 h-4" />
            </Button>
        </div>
    )
}