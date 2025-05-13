import Image from "next/image";
import Logo from "../public/BMP-Logo.jpg";
import GoogleIcon from "../public/google-icon.jpg";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <main
  className="flex flex-col justify-center items-center min-h-screen bg-cover bg-center relative"
  style={{ backgroundImage: "url('/bg-img.jpg')" }}
>
  <div className="m-[210px] w-[343px]">
    <Image src={Logo} alt="Logo Image" className="mx-auto mb-10" />
    <div className="text-start mb-6 font-inter">
      <div className="font-semibold text-2xl leading-8 text-[#101828] pb-[2px]">
        Sign in
      </div>
      <p className="font-normal text-base leading-6 tracking-normal text-[#667085]">
        Welcome back! Please enter your details.
      </p>
    </div>
    <form className="font-inter">
      <div className="mb-4">
        <label
          htmlFor="email"
          className="font-medium text-sm leading-5 tracking-normal"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-[343px] h-[44px] gap-2 rounded-lg border border-gray-300 pt-2.5 pr-3.5 pb-2.5 pl-3.5"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="font-medium text-sm leading-5 tracking-normal"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          required
          className="w-[343px] h-[44px] gap-2 rounded-lg border border-gray-300 pt-2.5 pr-3.5 pb-2.5 pl-3.5"
        />
      </div>

      <div className="flex justify-between items-center mb-4 font-inter font-medium mt-4">
        <div className="flex items-center">
          <input type="checkbox" id="remember-me" className="mr-2" />
          <label htmlFor="remember-me" className="text-sm">
            Remember for 30 days
          </label>
        </div>
        <Link href="#" className="text-[#344054] text-sm">
          Forgot password?
        </Link>
      </div>

      <div className="mb-4">
        <Link href="/onboarding"><button
          type="submit"
          className="w-full bg-btncolor text-white py-2 rounded-[8px] mb-4 font-semibold"
        >
          Sign in
        </button></Link>
        <button
          type="submit"
          className="w-full border flex items-center justify-center py-2 rounded font-semibold"
        >
          <Image
            src={GoogleIcon}
            alt="Google"
            width={24}
            height={24}
            className="mr-2"
          />
          Sign in with Google
        </button>
      </div>
    </form>
    <div className="text-center mt-6">
      <p>
        Don't have an account?{" "}
        <Link href="#" className="text-[#344054] font-semibold">
          Sign up
        </Link>
      </p>
    </div>
  </div>

  {/* cookies text moved outside, centered at bottom */}
  <div className="absolute bottom-8 text-center text-xs text-gray-500 w-[500px] font-inter font-bold leading-none tracking-normal">
    <p>
      BookMyPlay uses cookies for analytics personalized content and ads.
      <br />
      By using Scale's services you agree to this use of cookies.{" "}
      <Link href="#" className="underline">
        Learn more
      </Link>
    </p>
  </div>
</main>
    </>
  );
}
