'use client';

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Item } from "@radix-ui/react-select";
import { Avatar, AvatarFallback } from "./ui/avatar";

const testimonials = [
    {
        name: "Nanpet",
        avatar: "N",
        title: "Footballer",
        description: "This is the best application I've used!"
    },
    {
        name: "Greg",
        avatar: "G",
        title: "Med. professional",
        description: "Super Cool!"
    },
    {
        name: "Geraldine E.",
        avatar: "G",
        title: "Doctor",
        description: "So amazing!"
    },
    {
        name: "Gabriel Ogala.",
        avatar: "G",
        title: "Tech bro.",
        description: "An inspiring move!"
    },

];

const LandingContent = () => {
    return (
        <div className="px-10 pb-20 ">
            <h2 className="text-center text-4xl text-white font-extrabold mb-10">Testimonials</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {testimonials.map((testimonial, index) => (
                    <Card key={index} className="bg-[#192339] border-none text-white relative ">
                               <div className="absolute right-5 top-4">
                                <Avatar className="h-10 w-10">
                                    <AvatarFallback className="text-black">
                                            {testimonial.avatar}
                                    </AvatarFallback>
                                </Avatar>
                               </div>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <div className="">
                                    <p className="text-lg"> {testimonial.name} </p>
                                    <p className="text-zinc-400 text-sm"> {testimonial.title} </p>
                                </div>
                            </CardTitle>
                            <CardContent className="pt-4 px-0">
                                {testimonial.description}
                            </CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default LandingContent;