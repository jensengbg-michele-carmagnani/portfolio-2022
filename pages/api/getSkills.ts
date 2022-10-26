import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../../sanity";
import { Skill } from "../../typing";

const query = groq`
  *[_type == "skill"] 
`;

type Data = {
  skills: Skill[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const skills: Skill[] = await sanityClient.fetch(query);
  console.log(skills[0].image);
  res.status(200).json({ skills });
}
