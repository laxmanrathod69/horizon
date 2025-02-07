"use client";
import React, { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";
import {
  PlaidLinkOnSuccess,
  PlaidLinkOptions,
  usePlaidLink,
} from "react-plaid-link";
import { useRouter } from "next/navigation";
import {
  createLinkToken,
  exchangePublicToken,
} from "@/lib/actions/user.actions";
import Image from "next/image";

interface PlaidLinkProps {
  user: User;
  variant?: "primary" | "ghost" | "default";
}

const PlaidLink = ({ user, variant = "default" }: PlaidLinkProps) => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const getLinkToken = async () => {
      setLoading(true);
      try {
        const data = await createLinkToken(user);
        if (data?.linkToken) {
          setToken(data.linkToken);
        } else {
          setError("Unable to get link token.");
        }
      } catch (err) {
        console.error(err);
        setError("Error fetching link token.");
      } finally {
        setLoading(false);
      }
    };

    getLinkToken();
  }, [user]);

  const onSuccess = useCallback<PlaidLinkOnSuccess>(
    async (public_token: string) => {
      try {
        await exchangePublicToken({
          publicToken: public_token,
          user,
        });
        router.push("/");
      } catch (err) {
        console.error("Error exchanging public token:", err);
      }
    },
    [user]
  );

  const config: PlaidLinkOptions = {
    token,
    onSuccess,
  };

  const { open, ready } = usePlaidLink(config);

  const handleClick = () => {
    if (ready) open();
  };

  return (
    <>
      {error && <p className="text-red-500">{error}</p>}
      {loading ? (
        <p>Loading...</p>
      ) : variant === "primary" ? (
        <Button
          onClick={handleClick}
          disabled={!ready}
          className="plaidlink-primary"
        >
          Connect bank
        </Button>
      ) : variant === "ghost" ? (
        <Button
          onClick={handleClick}
          variant="ghost"
          className="plaidlink-ghost"
        >
          <Image
            src="/icons/connect-bank.svg"
            alt="connect bank"
            width={24}
            height={24}
          />
          <p className="hiddenl text-[16px] font-semibold text-black-2 xl:block">
            Connect bank
          </p>
        </Button>
      ) : (
        <Button onClick={handleClick} className="plaidlink-default">
          <Image src="/icons/plus.svg" alt="plue" width={20} height={20} />
          <p className="text-[16px] font-semibold text-black-2">Add bank</p>
        </Button>
      )}
    </>
  );
};

export default PlaidLink;
