import { sanityClient } from "@/sanity";
import { Experience, PageInfo, Project, Skill } from "@/typings";
import { groq, SanityClient } from "next-sanity";

const query = groq`
    *[_type == 'skill']
`;

export const fetchSkills = async () => {

    const res = await sanityClient.fetch(query)

    const skills: Skill[] = await sanityClient.fetch(query);

    return skills ;

};