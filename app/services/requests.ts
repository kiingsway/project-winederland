import { TSocialMedia } from "@/interfaces";
import axios from "axios";

export async function getFollowers(): Promise<Record<TSocialMedia, number | undefined>> {

  const Instagram = await getIGFollowers() || 31;
  const TikTok = await getTiktokLikes() || 2;
  const WhatsApp = undefined;

  return { Instagram, TikTok, WhatsApp };
}

type TFollowersLikes = number | undefined;

async function getIGFollowers(): Promise<TFollowersLikes> {
  const uri = `/instagram_page`;
  const html = (await axios.get<string>(uri)).data;

  const element = document.createElement('div');
  element.innerHTML = html;

  const metaTagContent = element.querySelector('meta[property="og:description"]')?.getAttribute('content') || undefined;
  if (!metaTagContent) return undefined;

  return parseInt(metaTagContent);
}

export async function getTiktokLikes(): Promise<TFollowersLikes> {
  const uri = `/tiktok_page`;
  const html = (await axios.get<string>(uri)).data;

  const element = document.createElement('div');
  element.innerHTML = html;

  const t = element.innerText;
  const regex = /"heartCount":(\d+)/;
  // eslint-disable-next-line no-unused-vars
  const [_, likes] = t.match(regex) || [undefined, undefined];

  return likes ? parseInt(likes) : undefined;
}