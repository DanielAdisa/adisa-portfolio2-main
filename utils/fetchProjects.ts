import { sanityClient } from "@/sanity";
import { Experience, PageInfo, Project } from "@/typings";
import { groq, SanityClient } from "next-sanity";

const query = groq`
    *[_type == 'project'] {
      ...,
      technologies[]->
    }
`;

export const fetchProjects = async () => {

    const res = await sanityClient.fetch(query)

    const projects: Project[] = await sanityClient.fetch(query);

    return projects ;
};