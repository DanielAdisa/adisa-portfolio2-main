import { sanityClient } from "@/sanity";
import { Experience, PageInfo, Project, Skill, Social } from "@/typings";
import { groq, SanityClient } from "next-sanity";

const query = groq`
    *[_type == 'social']
`;


export const fetchSocials = async () => {

    const res = await sanityClient.fetch(query)

    const socials: Social[] = await sanityClient.fetch(query);

    return socials ;

};