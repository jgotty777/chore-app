"use client";
import { Button, Group, NumberInput, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { signIn } from "../auth";

export default function SignIn() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const form = useForm({
    initialValues: {
      userName: "",
      loginPin: 0,
    },
  });

  async function handleLogin(values: { userName: string; loginPin: number }) {
    const results = await signIn("credentials", {
      username: values.userName,
      password: values.loginPin,

      redirect: false,
    });

    router.push(callbackUrl || "/");
  }
  return (
    <Suspense>
      <form onSubmit={form.onSubmit((values) => handleLogin(values))}>
        <TextInput
          withAsterisk
          label="User"
          placeholder="Username"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <NumberInput
          mt="md"
          label="Pin"
          key={form.key("loginPin")}
          {...form.getInputProps("loginPin")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </Suspense>
  );
}
