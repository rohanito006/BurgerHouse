import Container from "./container";


function LastProducts() {
    return (
        <Container>
            <div className=" w-full h-96 px-11 my-19">
                <div className="grid grid-flow-col grid-rows-2 gap-6 h-full">
                    <div className=" row-span-2 h-full rounded-md bg-green-500"></div>
                    <div className="h-full rounded-md bg-orange-800"></div>
                    <div className="h-full rounded-md bg-gray-800"></div>
                </div>
            </div>
        </Container>
    );
}


export default LastProducts;