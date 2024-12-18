export default function ListofTags() {
    return (
        <div className="flex flex-wrap items-center gap-2">
            <button className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Design
            </button>
            <button className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Development
            </button>
            <button className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Marketing
            </button>
            <button className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Sales
            </button>
            <button className="inline-flex items-center rounded-full bg-primary px-3 py-1 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                Finance
            </button>
        </div>
    )
}