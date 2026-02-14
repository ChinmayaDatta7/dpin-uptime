"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";

export function Appbar() {
  return (
    <div className="flex justify-between items-center p-4">
      <div>DPin Uptime</div>
      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
          <SignUpButton />
        </SignedOut>
      </div>
    </div>
  );
  //   return <ClerkProvider>
  //   <div className="flex justify-between items-center p-4">
  //   </div>
  //   </ClerkProvider>
}
