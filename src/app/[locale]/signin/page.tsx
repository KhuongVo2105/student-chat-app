'use client'
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const SignIn = () => {
  const t = useTranslations("login");

  const handleGoogleLogin = () => {};

  return (
    <>
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        {t("title")}
      </h2>
      <div className="flex justify-center space-x-4 mb-4">
        <button
          onClick={handleGoogleLogin}
          className="text-white rounded-full w-10"
        >
          <Image
            src={"/socials/googleBtn.png"}
            alt="google logo"
            width={50}
            height={50}
          />
        </button>
        <button className="text-white rounded-full w-10">
          <Image
            src={"/socials/facebookBtn.png"}
            alt="google logo"
            width={50}
            height={50}
          />
        </button>
        <button className="text-white rounded-full w-10">
          <Image
            src={"/socials/appleBtn.png"}
            alt="google logo"
            width={50}
            height={50}
          />
        </button>
      </div>
    </>
  );
};

export default SignIn;
