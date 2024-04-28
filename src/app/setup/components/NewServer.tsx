"use client"
import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const formSchema = z.object({
    name: z.string().min(1, {
        message: 'Please enter a name for your server.'
    }),
    imageUrl: z.string().url().min(1, {
        message: 'Please enter a valid URL for your server image.'
    })
})

const NewServer = () => {
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    const form = useForm({
        defaultValues: {
            name: '',
            imageUrl: '',
        },
        resolver: zodResolver(formSchema)
    })

    const isLoading = form.formState.isSubmitting;

    const onSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values)
    }

    if (!mounted) {
        return null
    }

    return (
        <Dialog>
            <DialogTrigger>Create New Server</DialogTrigger>
            <DialogContent className='bg-white text-black p-0 overflow-hidden'>
                <DialogHeader className='pt-8 px-6'>
                    <DialogTitle className='text-2xl text-center font-bold'>Customize Your Server</DialogTitle>
                    <DialogDescription className='text-center text-zinc-500'>
                        Give your server a name and image. You can always change these later.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className='space-y-8 px-6'>
                            <div className='flex justify-center items-center text-center'>
                                <FormField control={form.control} name="imageUrl" render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <FileUpload value={field.value} onChange={field.onChange} />
                                        </FormControl>
                                    </FormItem>
                                )} />
                            </div>
                            <FormField control={form.control} name='name' render={({ field }) => (
                                <FormItem>
                                    <FormLabel className='uppercase text-xs font-bold text-zinc-500 dark:text-secondary/70'>
                                        Server Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input {...field} disabled={isLoading} placeholder='Enter a server name' className='bg-zinc-300/50 focus-visible:ring-0 text-black focus-visible:ring-offset-0' />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )} />
                        </div>
                        <DialogFooter className='bg-gray-100 px-6 py-4'>
                            <Button disabled={isLoading} variant={'primary'}>
                                Create
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>

    )
}
interface FileUploadProps {
    onChange: (url?: string) => void
    value: string;
}
const FileUpload = ({ value, onChange }: FileUploadProps) => {
    return <div>
        File Upload
    </div>
}

export default NewServer