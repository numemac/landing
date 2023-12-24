export default function GridBackground() {

    const squares = (amount) => {
        let result = []
        for(let i = 0; i < amount; i++) {
            result.push(<div key={i} className="w-24 lg:w-48 h-24 lg:h-48 border border-gray-300 dark:border-gray-500"></div>)
        }
        return result
    }

    return (
        <div className="absolute -z-10 inset-0 top-0 left-0 w-full h-full opacity-30 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]">
            <div className="flex flex-row flex-wrap">
                {squares(100)}
            </div>
        </div>
    );
}