"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";

export default function Home() {
  const { data: session } = authClient.useSession();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const onSubmit = () => {
    authClient.signUp.email(
      {
        email,
        password,
        name,
      },
      {
        onSuccess: () => {
          window.alert("User created successfully");
        },
        onError: () => {
          window.alert("Error creating user");
        },
      }
    );
  };
  const onLogin = () => {
    authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onSuccess: () => {
          window.alert("User Logged In successfully");
        },
        onError: () => {
          window.alert("Error logging in user");
        },
      }
    );
  };
  if (session) {
    return (
      <div className="flex flex-col p-4 gap-y-4">
        <p>Logged in as {session.user.name}</p>
        <Button onClick={() => authClient.signOut()}>Sign Out</Button>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-y-10">
      <div className="p-4 flex flex-col gap-4 ">
        <Input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onSubmit}>Create User</Button>
      </div>
      <div className="p-4 flex flex-col gap-4 ">
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button onClick={onLogin}>Log In</Button>
      </div>
    </div>
  );
}
