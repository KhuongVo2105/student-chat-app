"use client";
import { signIn } from "next-auth/react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  const t = useTranslations("login");

  return (
    <div className="flex items-center justify-center w-full h-screen bg-[url(/SignIn.svg)] bg-cover bg-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-pink-300">
        <>
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {t("title")}
          </h2>
          <div className="flex justify-center space-x-4 mb-4">
            <button
              className="text-white rounded-full w-10 cursor-pointer"
              onClick={() => signIn("google", { callbackUrl: "/home" })}
            >
              <Image
                src={"/socials/googleBtn.png"}
                width={50}
                height={50}
                alt="google button"
              />
            </button>
            <button className="text-white rounded-full w-10 cursor-not-allowed">
              <Image
                src={"/socials/facebookBtn.png"}
                width={50}
                height={50}
                alt="facebook button"
              />
            </button>
            <button className="text-white rounded-full w-10 cursor-not-allowed">
              <Image
                src={"/socials/appleBtn.png"}
                width={50}
                height={50}
                alt="apple button"
              />
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default SignIn;
