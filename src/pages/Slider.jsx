
const Slider = () => {
    return (
        <div className="carousel rounded-xl w-full">
            <div id="slide1" className="carousel-item h-[500px] relative w-full">
                <img
                    src="https://i.ibb.co.com/VW25TYkH/jonathan-petersson-a6-N685q-Ls-HQ-unsplash.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item h-[500px]  relative w-full">
                <img
                    src="https://i.ibb.co.com/8490y3k6/markus-spiske-Qozz-Jp-FZ2lg-unsplash.jpg
"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item h-[500px]  relative w-full">
                <img
                    src="https://i.ibb.co.com/934FmZrh/jeshoots-com-fz-OITu-S1-DIQ-unsplash.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item h-[500px]  relative w-full">
                <img
                    src="https://i.ibb.co.com/yc59FnV4/thomas-buchholz-0n7-ei-AQZw-A-unsplash.jpg"
                    className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Slider;