"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sidebarLinks } from "@/constants";
import Footer from "./Footer";
import PlaidLink from "./PlaidLink";

const Siderbar = ({ user }: SiderbarProps) => {
  const pathname = usePathname();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="mb-12 cursor-pointer flex items-center gap-2"
          >
            <Image
              src="/icons/logo.svg"
              alt="Horizon logo"
              width={34}
              height={34}
              className="size-[24px] max-xl:size-14"
            />
            <h1 className="sidebar-logo">Horizon</h1>
          </Link>
          {/* TODO: Add sidebar pannel*/}
        </div>
        {sidebarLinks.map((item) => {
          const isActive =
            pathname === item.route || pathname.startsWith(`${item.route}/`);

          return (
            <Link
              key={item.label}
              href={item.route}
              className={cn("sidebar-link", { "bg-bank-gradient": isActive })}
            >
              <div className="relative size-6">
                <Image
                  fill
                  src={item.imgURL}
                  alt={item.label}
                  className={cn({ "brightness-[3] invert-0": isActive })}
                />
              </div>
              <p className={cn("sidebar-label", { "!text-white": isActive })}>
                {item.label}
              </p>
            </Link>
          );
        })}
        <PlaidLink user={user} />
      </nav>
      <Footer user={user} />
    </section>
  );
};

export default Siderbar;
