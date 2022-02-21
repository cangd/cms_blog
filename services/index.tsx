import { request, gql } from "graphql-request";

let graphqlAPI: string;

process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT
  ? (graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT)
  : console.error("graphqlAPI is not set");

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              bio
              name
              id
              photo {
                url
              }
            }
            slug
            title
            excerpt
            createdAt
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;
  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};
