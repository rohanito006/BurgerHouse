

function Container({children}: { children: React.ReactNode }) {
    return (
        <div className="max-w-6xl h-full m-auto px-5 xl:px-0">
            {children}
        </div>
    )
}

export default Container;