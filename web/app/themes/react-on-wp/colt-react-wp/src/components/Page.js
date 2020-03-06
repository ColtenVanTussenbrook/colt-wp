import React from 'react';
import { useQuery } from 'react-apollo';
import gql from 'graphql-tag';

const GET_PAGE = gql`
  query Page($path: String!) {
    pageBy(uri: $path) {
      content
    }
  }
`;

function Page( {path} ) {

  const { loading, error, data } = useQuery(GET_PAGE, {
    variables: {path},
  });

  if (loading) {
    console.log("loading page content");
  } 
  if (error) {
    console.log(error);
  }
  if (data) {
    return (
      <div className="container mx-auto">
        <h1 className="text-4xl">Heading</h1>
        <div dangerouslySetInnerHTML={{__html: data.pageBy.content}} />
      </div>
    );
  } else return null; 
}

export default Page;
