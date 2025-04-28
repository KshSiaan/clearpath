import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full !mt-auto">
      <div className="bg-gradient-to-r from-[#7474BF] to-[#348AC7] text-white">
        <div className="container !mx-auto !px-6 !pt-12 !pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <Image
                src="/image/logo.png"
                height={80}
                width={200}
                alt="logo"
                className="object-contain aspect-video w-[120px] !mb-4"
              />
              <p className="!mb-4 opacity-90">
                Eco-friendly, affordable, and reliable pet waste removal
                services right at your doorstep.
              </p>
              <div className="flex !space-x-4 !mt-8">
                <ul className="!space-y-3">
                  <li className="flex items-center">
                    <Phone className="!mr-2 h-5 w-5 shrink-0" />
                    <span>+1256987456</span>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="!mr-2 h-5 w-5 shrink-0 !mt-0.5" />
                    <span>Dhaka, Bangladesh</span>
                  </li>

                  <li className="flex items-center">
                    <Mail className="!mr-2 h-5 w-5 shrink-0" />
                    <span>example@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="!mt-12">
              <h3 className="text-xl font-bold !mb-4  md:text-center underline">
                Quick Links
              </h3>
              <ul className="!space-y-4  md:text-center text-lg">
                <li>
                  <Link href="#" className="hover:underline">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:underline">
                    Refer a friend
                  </Link>
                </li>
              </ul>
            </div>
            <div className="">
              <Image
                src="/image/icon/footer-dog.svg"
                height={400}
                width={400}
                alt="logo"
                className="object-contain aspect-square h-[100px] md:h-[300px] !mb-4"
              />
            </div>
          </div>

          <div className="border-t border-white/20 !mt-12 !pt-6 text-center">
            <p>
              © {new Date().getFullYear()} Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
