import {defer} from '@shopify/remix-oxygen';
import {Await, useLoaderData, Link} from '@remix-run/react';
import {Suspense} from 'react';
import {Image, Money} from '@shopify/hydrogen';

export const meta = () => {
  return [{title: 'Hydrogen | Home'}];
};

export async function loader({context}) {
  const {storefront} = context;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const {collections} = await storefront.query(FEATURED_COLLECTION_QUERY);
  const featuredCollection = collections.nodes[0];
  const allCollections = await storefront.query(ALL_COLLECTIONS_QUERY);
  return defer({
    featuredCollection, 
    recommendedProducts,
    allCollections
  });
}

export default function Homepage() {
  const data = useLoaderData();
  return (
    <div className="home">
      <div class='' aria-labelledby="carousel-heading">
        <AllCollections collection={data.allCollections} />
      </div>
      <hr></hr>
      {/* <FeaturedCollection collection={data.featuredCollection} /> */}
      <RecommendedProducts products={data.recommendedProducts} />
    </div>
  );
}
function AllCollections({collections}) {
  const {allCollections} = useLoaderData();
  const testAllCollections = allCollections.collections.nodes;
  return (
    <ul class='flex gap-4 splide__list'>
      {testAllCollections.map((collection) => (
        <li class="splide__slide">
          <h1>{collection.title}</h1>
          <Link
            className="featured-collection"
            to={`/collections/${collection.handle}`}
          >
            {collection.image && (
              <div className="featured-collection-image">
                <Image data={collection.image} sizes="100vw" />
              </div>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
const ALL_COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 10, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
`;

function FeaturedCollection({collection}) {
  const image = collection.image;
  return (
    <Link
      className="featured-collection"
      to={`/collections/${collection.handle}`}
    >
      {image && (
        <div className="featured-collection-image">
          <Image data={image} sizes="100vw" />
        </div>
      )}
      <h1>{collection.title}</h1>
    </Link>
  );
}

function RecommendedProducts({products}) {
  return (
    <div className="recommended-products">
      <h2>Recommended Products</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Await resolve={products}>
          {({products}) => (
            <div className="recommended-products-grid">
              {products.nodes.map((product) => (
                <Link
                  key={product.id}
                  className="recommended-product"
                  to={`/products/${product.handle}`}
                >
                  <Image
                    data={product.images.nodes[0]}
                    aspectRatio="1/1"
                    sizes="(min-width: 45em) 20vw, 50vw"
                  />
                  <h4>{product.title}</h4>
                  <small>
                    <Money data={product.priceRange.minVariantPrice} />
                  </small>
                </Link>
              ))}
            </div>
          )}
        </Await>
      </Suspense>
      <br />
    </div>
  );
}

const FEATURED_COLLECTION_QUERY = `#graphql
  fragment FeaturedCollection on Collection {
    id
    title
    image {
      id
      url
      altText
      width
      height
    }
    handle
  }
  query FeaturedCollection($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    collections(first: 1, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...FeaturedCollection
      }
    }
  }
`;

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 4, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;
