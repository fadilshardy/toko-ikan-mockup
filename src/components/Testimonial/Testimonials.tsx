import * as React from 'react';
import Testimonial from './Testimonial';

interface ITestimonialsProps {
}

const testimonials = [{
    avatar: "/images/avatar-1.png",
    name: "Floyd Miles",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    star: "/images/star-1.png"
}, {
    avatar: "/images/avatar-2.svg",
    name: "Ronald Richards",
    content: "ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    star: "/images/star-2.png"
},
{
    avatar: "/images/avatar-3.png",
    name: "Savannah Nguyen",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
    star: ''
},
{
    avatar: "/images/avatar-4.png",
    name: "Floyd Miles",
    content: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet",
    star: ''
},

]


const Testimonials: React.FunctionComponent<ITestimonialsProps> = (props) => {
    return <section className="py-28 container mx-auto pt-64 lg:pt-32  pb-64">
        <div className="flex flex-col items-center pb-28">
            <h2 className="font-bold text-5xl pb-8">Testimonial</h2>
            <p className="font-medium text-neutral-400 w-1/2 mx-auto text-center">A Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s  standard dummy text </p>
        </div>
        <div className="flex gap-8 flex-col lg:flex-row  overflow-hidden p-4">
            {testimonials.map(testimonial => <Testimonial key={testimonial.avatar} avatar={testimonial.avatar} name={testimonial.name} content={testimonial.content} star={testimonial.star} />)}
        </div>
        <div className="flex gap-8 items-center py-10 justify-center">
            <div className="h-4 w-4 bg-[#D8191E] rounded-full" />
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full" />
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full" />
            <div className="h-4 w-4 bg-[#D9D9D9] rounded-full" />
        </div>
    </section>;
};

export default Testimonials;
