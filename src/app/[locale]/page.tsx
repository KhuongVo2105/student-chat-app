import SignIn from "./signin/page";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-[url(/SignIn.svg)] bg-cover bg-center">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center border-2 border-pink-300">
        <SignIn />
      </div>
    </div>
  );
}