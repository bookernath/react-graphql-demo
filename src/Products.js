import React from 'react'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Product from './Product'

const Products = () => (
  <Query
    query={gql`
      {
        site {
          products (first:20) {
            edges {
              node {
                name
                images {
                  url200: url(width: 200, height: 200)
                  url400: url(width: 400, height: 400)
                  url800: url(width: 800, height: 800)
                  url1200: url(width: 1200, height: 1200)
                  altText
                }
                path
                prices{
                  price{
                    value
                    currencyCode
                  }
                }
                options {
                  displayName
                  entityId
                  values {
                    label
                    entityId
                  }
                }
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Good things take time....</p>
      if (error) return <p>Something went wrong...</p>

      return <div className="row">{data.site.products.edges.map(product => <Product product={product.node} />)}</div>
    }}
  </Query>
);

export default Products
