
import { sanityClient } from "@/sanity";
import { Experience, PageInfo } from "@/typings";
import { groq} from "next-sanity";

const query = groq`
    *[_type == 'pageInfo'][0]
`;

export const fetchPageInfo = async () => {

    const res = await sanityClient.fetch(query)

    const pageInfo: PageInfo = await sanityClient.fetch(query)

    return pageInfo;
};