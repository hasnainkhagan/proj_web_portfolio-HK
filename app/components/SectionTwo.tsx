import Image from "next/image";
import square from "../../public/square.svg";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import sketch from "../../public/tech-icons/sketch.svg";
import canva from "../../public/tech-icons/canva.svg";
import ai from "../../public/tech-icons/ai.svg";
import figma from "../../public/tech-icons/figma.svg";
import chatgpt from "../../public/tech-icons/chatgpt.svg";
import cloud from "../../public/tech-icons/creativecloud.svg";
import framer from "../../public/tech-icons/framer.svg";
import github from "../../public/tech-icons/github.svg";
import slack from "../../public/tech-icons/slack.svg";
import discord from "../../public/tech-icons/discord.svg";
import youtube from "../../public/tech-icons/youtube.svg";
import chrome from "../../public/tech-icons/chrome.svg";
import pr from "../../public/tech-icons/pr.svg";
import ps from "../../public/tech-icons/ps.svg";
import notion from "../../public/tech-icons/notion.svg";
import micro from "../../public/tech-icons/micro.svg";
import twitter from "../../public/twitter.svg";
import insta from "../../public/insta.svg";
import linkedin from "../../public/linkedin.svg";
import { Button } from "@/components/ui/button";

const icons = [
  sketch,
  canva,
  ai,
  pr,
  ps,
  figma,
  chatgpt,
  micro,
  framer,
  github,
  slack,
  notion,
  cloud,
  discord,
  youtube,
  chrome,
];

const socialMedia = [
  {
    id: 1,
    icon: insta,
    name: "Instagram",
    username: "@hasainkhagan",
    link: "https://instagram.com/hasnainkhagan",
  },
  {
    id: 2,
    icon: twitter,
    name: "X / Twitter",
    username: "@hasainkhagan",
    link: "https://twitter.com/hasnainkhagan",
  },
  {
    id: 3,
    icon: linkedin,
    name: "Linkedin",
    username: "/hasainkhagan",
    link: "https://www.linkedin.com/in/hasnainkhagan/",
  },
];

export function SectionTwo() {
  return (
    <div className="grid gird-cols-1 lg:grid-cols-3 gap-4 mt-10 cursor-default">
      <div className="w-full relative col-span-1">
        <Image
          src={square}
          alt="square"
          className="w-full h-full object-cover rounded-[2em]"
        />
      </div>
      <div className="flex flex-col w-full col-span-1 lg:col-span-2 gap-4">
        <Card className="bg-gray-100 border-none rounded-[2em]">
          <CardHeader className="uppercase text-[#131313]">
            <CardTitle className="font-bold tracking-[-.1em]">
              explore my stack arsenal
            </CardTitle>
            <CardDescription>Check out the tools i use daily</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            {icons.map((item, index) => (
              <Image
                key={index}
                src={item}
                alt="Icon"
                className="w-16 h-16 rounded-[1.25em]"
              />
            ))}
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4">
          {socialMedia.map((item) => (
            <Card
              key={item.id}
              className="p-4 flex flex-col items-center sm:items-start bg-gray-100 border-none rounded-[2em]"
            >
              <Image
                src={item.icon}
                alt="Icon"
                className="w-16 h-16 rounded-[1.25em]"
              />
              <h1 className="text-2xl font-medium pt-3">{item.name}</h1>
              <p className="text-muted-foreground lowercase">{item.username}</p>
              <Button className="mt-4" size="sm" asChild>
                <a href={item.link} className="uppercase tracking-tighter">
                  Follow
                </a>
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
