import {useNavigate} from "react-router-dom";
import arrow_up from '@/assets/images/arrow_up.svg';
import purple_arrow_up from '@/assets/images/purple_arrow_1.svg';
import pentagon from '@/assets/images/pentagon2_icon.svg';
import hero_banner_1 from '@/assets/images/hero_banner_1.svg';
import hero_banner_2 from '@/assets/images/hero_banner_2.svg';
import hero_banner from '@/assets/images/hero_banner.svg';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Custom Left Arrow Component
const CustomLeftArrow: React.FC<{ onClick?: () => void }> = ({onClick}) => {
    return (
        <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#B3B2FB] flex items-center justify-center w-[3.5rem] * h-[3.5rem] rounded-full z-10 shadow-lg hover:bg-[#A3A2F3] transition"
            onClick={onClick}
        >
            <div className='flex items-center justify-center w-[2.1rem] h-[2.1rem] rounded-full bg-white'>
                <img src={arrow_up} alt="next" className='rotate-[220deg]'/>
            </div>
        </button>
    );
};

// Custom Right Arrow Component
const CustomRightArrow: React.FC<{ onClick?: () => void }> = ({onClick}) => {
    return (
        <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#B3B2FB] flex items-center justify-center w-[3.5rem] * h-[3.5rem] rounded-full z-10 shadow-lg hover:bg-[#A3A2F3] transition"
            onClick={onClick}
        >
            <div className='flex items-center justify-center w-[2.1rem] h-[2.1rem] rounded-full bg-white'>
                <img src={arrow_up} alt="next" className='rotate-[40deg]'/>
            </div>
        </button>
    );
};

const CvTemplateCarousel: React.FC = () => {
    const navigate = useNavigate();

    const templates = Array.from({length: 3}, (_, index) => ({
        id: index + 1,
        title: `Template ${index + 1}`,
        description: `Description for template ${index + 1}. Showcase your creativity with a bold yet structured design. Perfect for creative professionals, it highlights key accomplishments, skills, and portfolio work.`,
        tags: ["Bold", "Visual", "Unique"],
    }));

    const responsive = {
        superLargeDesktop: {
            breakpoint: {max: 4000, min: 3000},
            items: 5,
        },
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 4,
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 2,
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1,
        },
    };

    const handleTemplateClick = (template: typeof templates[number]) => {
        navigate("/creative-resume", {state: {template}});
    };


    return (
        <Carousel
            responsive={responsive}
            customLeftArrow={<CustomLeftArrow/>}
            customRightArrow={<CustomRightArrow/>}
            className="ml-2 sm:ml-0"
        >
            {templates.map((template) => (
                <div
                    key={template.id}
                    onClick={() => handleTemplateClick(template)}
                    className="bg-[#000006] text-white h-[33.9rem] w-[19.6rem] px-[0.84rem] py-[0.96rem] lg:pb-[1.68rem] rounded-[0.46rem] shadow-gray-500 flex flex-col gap-5"
                >
                    <div className="bg-[#E1E0F3] h-[35%] lg:h-2/4">
                        <div
                            className="group relative h-[12.5rem] lg:h-[14.2rem] group-hover:h-auto group-hover:w-auto min-w-full md:w-4/5 overflow-hidden cursor-pointer pt-10">
                            <img
                                src={hero_banner_1}
                                alt={`hero banner ${template.id}`}
                                className="h-full w-full absolute
                translate-x-[-1rem] md:translate-x-0 group-hover:-translate-y-6 lg:group-hover:-translate-y-4 transition-all duration-300 delay-500 ease-in-out left-7 md:left-0 group-hover:scale-150"
                            />
                            <img
                                src={hero_banner_2}
                                alt={`hero banner ${template.id}`}
                                className="h-full w-full absolute translate-x-[-2rem] md:translate-x-[-4rem] lg:translate-x-[-2rem] -translate-y-5 group-hover:-translate-y-7 lg:group-hover:-translate-y-0 group-hover:-rotate-12 transition-all duration-300 delay-500 ease-in-out -left-0 md:left-0 group-hover:scale-150"
                            />
                            <img
                                src={hero_banner}
                                alt={`hero banner ${template.id}`}
                                className="h-full w-full absolute translate-x-[-0.6rem]  md:translate-x-[3rem] lg:translate-x-[5rem] -translate-y-4 group-hover:rotate-[18deg] lg:group-hover:rotate-12 transition-all duration-700 delay-500 ease-in-out left-14 md:left-0 group-hover:scale-150"
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 pt-7 lg:pt-[0.96rem]">
                        <div className="flex justify-between items-center">
                            <img src={purple_arrow_up} alt="purple arrow up"/>
                            <div className="flex gap-2">
                                {template.tags.map((tag, tagIndex) => (
                                    <span
                                        key={tagIndex}
                                        className="px-[0.52rem] py-[0.21rem] bg-white text-black w-[4rem] h-[1.9rem] flex items-center justify-center rounded-[0.21rem]"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between group">
                            <h5 className="text-white text-[1.3rem] font-semibold leading-[2.4rem]">
                                {template.title}
                            </h5>
                            <img
                                src={pentagon}
                                alt="pentagon icon"
                                className="w-[2.4rem] h-[2.4rem] group-hover:rotate-180 transition-all ease-in-out duration-300"
                            />
                        </div>
                        <div>
                            <p className="text-left">{template.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default CvTemplateCarousel;
