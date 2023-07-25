'use client';
import * as z from "zod";

import Heading from '@/components/heading';
import { MessageSquare, Music } from 'lucide-react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { formSchema } from "./contants";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ChatCompletionRequestMessage } from "openai";
import axios from "axios";
import { useRouter } from "next/navigation";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";

const MusicPage = () => {
    const router = useRouter();
    const [music, setMusic] = useState<string>();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            prompt: "",
        }
    });

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        try {
            setMusic(undefined);
            const response = await axios.post('/api/music', values);
            console.log(444, response);
            setMusic(response.data.audio);
            form.reset();
        } catch (error: any) {
            //TODO open pro Modal
            console.log(error);
        } finally {
            router.refresh();
        }
    };
    return (
        <div>
            <Heading title='Music Generation' description='Turn your prompts to music' icon={Music} iconColor='text-emerald-500' bgColor='bg-emerald-500/10' />
            <div className="px-4 lg:px-8 ">
                <div className="">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className=" rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2 " >
                            <FormField
                                name="prompt"
                                render={({ field }) => (
                                    <FormItem className="col-span-12 lg:col-span-10">
                                        <FormControl className="m-0 p-0">
                                            <Input
                                                className="border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent"
                                                disabled={isLoading}
                                                placeholder="Bethoveen Solo"
                                                {...field}
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <Button className="col-span-12 lg:col-span-2 w-full" type="submit" disabled={isLoading} size="icon">
                                Generate
                            </Button>
                        </form>
                    </Form>
                </div>
                <div className="space-y-4 mt-4 ">
                    {
                        isLoading && (
                            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted">
                                <Loader />
                            </div>
                        )
                    }
                    {!music && !isLoading && (
                        <div className="">
                            <Empty label="No music generated." />
                        </div>
                    )}
                    {music && (
                        <audio controls className="w-full mt-8">
                            <source src={music} />
                        </audio>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MusicPage;