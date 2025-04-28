import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  ArrowUpRight,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  PlusIcon,
  SendHorizonalIcon,
  StarIcon,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      <header
        className="h-[120dvh] md:h-screen bg-cover bg-no-repeat bg-center grid grid-cols-1 md:grid-cols-2 !px-4 md:!px-[7%]"
        style={{ backgroundImage: `url("/image/header.jpg")` }}
      >
        <div className="flex flex-col justify-center items-start gap-8">
          <h1 className="text-background font-semibold text-3xl md:text-5xl">
            Say Goodbye to Pet Waste Hassles!
          </h1>
          <p className="text-xl md:text-2xl text-background">
            Eco-friendly, affordable, and reliable pet waste removal services{" "}
            <br />
            right at your doorstep.
          </p>
          <Label className="text-lg text-background">
            Get 50% off in your first month.
          </Label>
          <div className="w-full md:w-auto">
            <div className="!p-2 rounded-full bg-emerald-100/70 border-2 flex flex-row justify-between items-center gap-2">
              <input
                placeholder="Zip Code"
                className="text-base !px-4 h-full outline-0 border-0 ring-0 font-semibold w-max"
              />
              <button className="!px-4 md:!px-6 !py-3 bg-background rounded-full font-semibold text-sm md:text-base">
                Get instant Quote
              </button>
            </div>
          </div>
          <div className="!mt-12 !space-y-2">
            <p className="text-xl font-semibold text-background">200 +</p>
            <p className="text-xl font-semibold text-background">
              Happy Clients
            </p>
            <div className="w-[200px] grid grid-cols-10 md:grid-cols-8 gap-2">
              <Avatar className="size-12 border-2">
                <AvatarImage
                  src="/image/avatars/1.jpg"
                  alt="Maria Johns"
                  className="object-cover"
                />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 border-2">
                <AvatarImage
                  src="/image/avatars/2.jpg"
                  alt="Maria Johns"
                  className="object-cover"
                />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 border-2">
                <AvatarImage
                  src="/image/avatars/3.jpg"
                  alt="Maria Johns"
                  className="object-cover"
                />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 border-2">
                <AvatarImage
                  src="/image/avatars/4.jpg"
                  alt="Maria Johns"
                  className="object-cover"
                />
                <AvatarFallback>MJ</AvatarFallback>
              </Avatar>
              <Avatar className="size-12 border-2">
                <AvatarFallback>
                  <PlusIcon />
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full h-full justify-end items-center !pb-12 md:!pb-[35%]">
          <div className="rounded-xl border-2 !p-6 !pr-[160px] flex gap-4 bg-background/20 backdrop-blur-sm">
            <Avatar className="size-14">
              <AvatarImage
                src="/image/avatars/1.jpg"
                className="object-cover"
              />
              <AvatarFallback>JL</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg font-semibold">Jenifer Lopez</span>
              <div className="flex">
                <StarIcon fill="#FF9D00" stroke="#FF9D00" />
                <StarIcon fill="#FF9D00" stroke="#FF9D00" />
                <StarIcon fill="#FF9D00" stroke="#FF9D00" />
                <StarIcon fill="#FF9D00" stroke="#FF9D00" />
                <StarIcon fill="#FF9D00" stroke="#FF9D00" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="!py-12 !px-4 md:!px-[7%] bg-zinc-100">
        <h1 className="text-4xl font-semibold text-center">
          Our Promises for our clients
        </h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 !mt-12">
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/reliability 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">
                Reliable, Hassle free Service
              </h3>
              <div className="">
                <p className="text-lg">
                  Our reliable, hassle-free The PNW’s dog waste removal service
                  ensures timely, efficient visits, leaving your yard pristine.
                  Enjoy more time with your dog—let us handle the mess!
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/insignia 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">
                Reliable, Hassle free Service
              </h3>
              <div className="">
                <p className="text-lg">
                  Our reliable, hassle-free The PNW’s dog waste removal service
                  ensures timely, efficient visits, leaving your yard pristine.
                  Enjoy more time with your dog—let us handle the mess!
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/safety 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">
                Reliable, Hassle free Service
              </h3>
              <div className="">
                <p className="text-lg">
                  Our reliable, hassle-free The PNW’s dog waste removal service
                  ensures timely, efficient visits, leaving your yard pristine.
                  Enjoy more time with your dog—let us handle the mess!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="!my-12">
          <Card className="">
            <CardContent className="flex flex-col md:flex-row justify-strech">
              <div className="!h-full flex-1 !p-6 !space-y-6">
                <h2 className="text-3xl">
                  Refer a friend and earn 2 free cleanings
                </h2>
                <p className="text-lg">
                  Love Clearpath? Share the love! For every friend you refer who
                  signs up for our service, you&apos;ll receive 2 free cleanings
                  as a thank you. There&apos;s no limit — the more you refer,
                  the more you earn. It’s our way of saying thanks for helping
                  us spread the clean yard joy!
                </p>
                <button className="!px-[80px] !py-4 bg-[#BAE9FF] font-semibold rounded-2xl text-xl">
                  Refer a friend
                </button>
              </div>
              <div
                className="size-[300px] bg-cover"
                style={{ backgroundImage: `url('/image/icon/h1.jpg')` }}
              ></div>
            </CardContent>
          </Card>
        </div>
        <h3 className="text-4xl font-semibold text-center">About Us</h3>
        <div className="!my-12 grid md:grid-cols-2 md:gap-[100px] w-full">
          <div className="!space-y-6">
            <p className="text-xl font-semibold">- At Clearpath, </p>
            <p className="text-lg font-semibold">
              We`re passionate about two things — pets and cleanliness. We know
              that owning a pet brings endless joy, but cleaning up after them?
              Not so much. That’s where we come in.
            </p>
            <p className="text-lg">
              Founded with a mission to make pet ownership easier and
              communities cleaner, we offer professional pet waste removal
              services that are reliable, affordable, and eco-friendly. Whether
              you’re a busy pet parent, a landlord, or a community manager,
              we’re here to keep your outdoor spaces fresh and waste-free — so
              you can spend more time enjoying your pets and less time worrying
              about the mess.
            </p>
            <button className="!px-[80px] !py-5 bg-[#BAE9FF] flex rounded-full font-semibold text-lg">
              Get a Quote <ArrowUpRight className="!ml-2" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:h-full !mt-12 md:!mt-auto">
            <div
              className="bg-cover bg-center col-span-1 md:col-span-4 rounded-2xl aspect-[4/3]"
              style={{ backgroundImage: `url('/image/ab1.jpg')` }}
            />
            <div
              className="bg-cover bg-center col-span-1 md:col-span-2 rounded-2xl"
              style={{ backgroundImage: `url('/image/ab2.jpg')` }}
            />
            <div
              className="bg-cover bg-center col-span-1 md:col-span-3 rounded-2xl aspect-[4/3]"
              style={{ backgroundImage: `url('/image/ab3.jpg')` }}
            />
            <div
              className="bg-cover bg-center col-span-1 md:col-span-3 rounded-2xl aspect-[4/3]"
              style={{ backgroundImage: `url('/image/ab4.jpg')` }}
            />
          </div>
        </div>
        <h1 className="text-4xl font-semibold text-center">Our Locations</h1>
        <p className="text-xl font-semibold text-center !py-4">
          You can found us in this locations.{" "}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 !mt-12">
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-start gap-6">
              <div className="flex items-center text-xl font-semibold">
                <MapPinIcon className="!mr-2 size-8" />
                In Maryland
              </div>
              <div className="!space-y-3 !space-x-3">
                {[
                  "Anne Arundel",
                  "Kent",
                  "Talbot",
                  "Cecil",
                  "Worcester",
                  "Baltimore",
                  "Howard",
                  "Dorchester",
                  "Wicomico",
                  "Montgomery",
                ].map((x, i) => (
                  <div
                    className="text-base font-semibold border rounded-full !py-3 !px-6 inline-block"
                    key={i}
                  >
                    {x}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-start gap-6">
              <div className="flex items-center text-xl font-semibold">
                <MapPinIcon className="!mr-2 size-8" />
                In Delaware
              </div>
              <div className="!space-y-3 !space-x-3">
                {["New Castle", "Kent", "Sussex"].map((x, i) => (
                  <div
                    className="text-base font-semibold border rounded-full !py-3 !px-6 inline-block"
                    key={i}
                  >
                    {x}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-start gap-6">
              <div className="flex items-center text-xl font-semibold">
                <MapPinIcon className="!mr-2 size-8" />
                In Virginia
              </div>
              <div className="!space-y-3 !space-x-3">
                {["Arlington", "Loudoun", "Fairfax", "Prince William"].map(
                  (x, i) => (
                    <div
                      className="text-base font-semibold border rounded-full !py-3 !px-6 inline-block"
                      key={i}
                    >
                      {x}
                    </div>
                  )
                )}
              </div>
            </CardContent>
          </Card>
        </div>
        <button className="!px-[80px] !py-5 bg-[#BAE9FF] flex rounded-full font-semibold text-lg !mx-auto !my-12">
          Get a Quote <ArrowUpRight className="!ml-2" />
        </button>

        <h1 className="text-4xl font-semibold text-center">Why choose us ?</h1>
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-6 !mt-12">
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/reliability (1) 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">Reliable & On-Time</h3>
              <div className="">
                <p className="text-lg">
                  We respect your time. Our team always arrives on schedule and
                  completes each job thoroughly. You’ll never have to worry
                  about skipped days or inconsistent service — we pride
                  ourselves on being dependable, so your yard stays clean and
                  your routine remains uninterrupted.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/planting 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">Eco-Friendly Disposal</h3>
              <div className="">
                <p className="text-lg">
                  At ClearPath, we’re committed to sustainability. All collected
                  waste is disposed of in an environmentally responsible manner,
                  reducing our ecological footprint. We follow best practices to
                  ensure your yard stays clean while protecting the environment
                  — because a greener planet benefits pets, people, and
                  communities alike.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/pet-insurance 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">Pet & Family Safe</h3>
              <div className="">
                <p className="text-lg">
                  Your family’s safety is our top priority. We use safe tools
                  and eco-conscious methods to clean your yard without harming
                  pets, children, or plants. No harsh chemicals, no residue —
                  just a fresh, clean lawn where everyone can play, explore, and
                  relax without concern.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/flow 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">Flexible Plans</h3>
              <div className="">
                <p className="text-lg">
                  We understand every household is different. Whether you need
                  weekly, bi-weekly, or one-time service, we offer customizable
                  plans that match your schedule and budget. ClearPath makes it
                  easy to keep your yard clean — without locking you into
                  contracts or rigid commitments.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/location 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">
                Locally Owned & Operated
              </h3>
              <div className="">
                <p className="text-lg">
                  We’re more than a service — we’re your neighbors. As a local
                  business, we care deeply about the community we serve. Our
                  team brings a personal touch, fast support, and a true
                  understanding of your needs. Supporting ClearPath means
                  supporting a cleaner, healthier neighborhood.
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-zinc-100">
            <CardContent className="flex flex-col justify-around items-center gap-6">
              <div className="">
                <div className="rounded-full !p-4 bg-background">
                  <Image
                    src="/image/icon/satisfaction 1.png"
                    height={60}
                    width={60}
                    className="size-10"
                    alt="ico"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold">
                Satisfaction Guaranteed
              </h3>
              <div className="">
                <p className="text-lg">
                  Your satisfaction drives everything we do. If you&apos;re not
                  100% happy with a service visit, we’ll make it right — no
                  questions asked. Our team is trained, courteous, and
                  detail-oriented to ensure every cleanup meets our high
                  standards and leaves you completely satisfied.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="!my-12">
          <Card className="bg-[#BAE9FF] !py-12">
            <CardTitle className="text-center text-3xl">
              Get in Touch with us
            </CardTitle>
            <CardContent className="grid md:grid-cols-2 md:!px-12">
              <div className="">
                <h4 className="text-lg font-semibold md:text-3xl">
                  Lets Talk About Your Next Pet Disposal
                </h4>
                <p className="text-lg">
                  Have questions? Ready to schedule a cleanup? We’re here to
                  help! Reach out to us anytime — we’d love to hear from you.
                </p>
                <div className="!my-8 !space-y-3 md:!px-4">
                  {[
                    { icon: <PhoneIcon />, label: "+1256987456" },
                    { icon: <MailIcon />, label: "example@gmail.com" },
                    { icon: <MapPinIcon />, label: "Dhaka, Bangladesh" },
                  ].map((x, i) => (
                    <div key={i} className="flex gap-4 text-base md:text-xl">
                      {x.icon} {x.label}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex flex-col justify-between h-[400px]">
                <input
                  className="!px-4 !py-3 rounded-xl bg-background placeholder:text-foreground"
                  placeholder="Full name"
                />
                <input
                  className="!px-4 !py-3 rounded-xl bg-background placeholder:text-foreground"
                  placeholder="Email"
                />
                <textarea
                  className="!px-4 !py-3 rounded-xl bg-background placeholder:text-foreground"
                  rows={6}
                  placeholder="Your Enquiry"
                />
                <button className="flex !px-8 rounded-full !py-3 bg-background w-min items-center hover:bg-zinc-100">
                  Send <SendHorizonalIcon className="!ml-2 size-5" />
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}
