import { z } from 'zod';
import { Models } from 'appwrite';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Button } from '@/components/ui/button';
import { Textarea } from '../ui/textarea';
import FileUploader from '../shared/FileUploader';
import { Input } from '../ui/input';
import { PostValidation } from '@/lib/validation';
import { useNavigate } from 'react-router-dom';
import { useToast } from '../ui/use-toast';
import { useUserContext } from '@/context/AuthContext';
import { useCreatePost } from '@/lib/react-query/queriesAndMutations';

type PostFormProps = {
  post?: Models.Document;
  // action: 'Create' | 'Update';
};

const PostForm = ({ post }: PostFormProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { user } = useUserContext();

  // Query
  const { mutateAsync: createPost, isPending: isLoadingCreate } =
    useCreatePost();

  // Form.
  const form = useForm<z.infer<typeof PostValidation>>({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      caption: post ? post?.caption : '',
      file: [],
      location: post ? post.location : '',
      tags: post ? post.tags.join(',') : '',
    },
  });

  // Handler
  async function onSubmit(value: z.infer<typeof PostValidation>) {
    const newPost = await createPost({
      ...value,
      userId: user.id,
    });

    if (!newPost) {
      toast({
        title: 'Please try again.',
      });
    }

    navigate('/');

    console.log(value);
  }

  return (
    <Form {...form}>
      <form
        className='flex flex-col gap-9 w-full max-w-5xl'
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name='caption'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='shad-form_label'>Caption</FormLabel>
              <FormControl>
                <Textarea
                  className='shad-textarea custom-scrollbar'
                  {...field}
                />
              </FormControl>
              <FormMessage className='shad-form_message' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='file'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='shad-form_label'>Add Photos</FormLabel>
              <FormControl>
                <FileUploader
                  fieldChange={field.onChange}
                  mediaUrl={post?.imageUrl}
                />
              </FormControl>
              <FormMessage className='shad-form_message' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='location'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='shad-form_label'>Add Location</FormLabel>
              <FormControl>
                <Input className='shad-input' type='text' {...field} />
              </FormControl>
              <FormMessage className='shad-form_message' />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='tags'
          render={({ field }) => (
            <FormItem>
              <FormLabel className='shad-form_label'>
                Add Tags (separated by comma " , ")
              </FormLabel>
              <FormControl>
                <Input
                  className='shad-input'
                  type='text'
                  placeholder='Art, Learn, Expression'
                  {...field}
                />
              </FormControl>
              <FormMessage className='shad-form_message' />
            </FormItem>
          )}
        />
        <div className='flex gap-4 items-center justify-end'>
          <Button className='shad-button_dark_4' type='button'>
            Cancel
          </Button>
          <Button
            className='shad-button_primary whitespace-nowrap'
            type='submit'
          >
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default PostForm;
