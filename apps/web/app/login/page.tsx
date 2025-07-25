'use client';
import { Button, Group, NumberInput, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { Suspense } from 'react';
import { handleLogin } from './functions/handleLogin';

function LoginComponent() {
  const form = useForm({
    initialValues: {
      userName: '',
      loginPin: 0
    }
  });
  async function handleFrontEndLogin(values: { userName: string; loginPin: number }) {
    const results = await handleLogin(values);
  }
  return (
    <form onSubmit={form.onSubmit(values => handleFrontEndLogin(values))}>
      <TextInput withAsterisk label="User" placeholder="Username" key={form.key('userName')} {...form.getInputProps('userName')} />

      <NumberInput placeholder="0" mt="md" label="Pin" key={form.key('loginPin')} {...form.getInputProps('loginPin')} />

      <Group justify="flex-end" mt="md">
        <Button type="submit">Submit</Button>
      </Group>
    </form>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginComponent />
    </Suspense>
  );
}
