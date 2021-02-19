import React from 'react'
import {graphql} from 'gatsby'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import ProdutoPost from '../components/produto'
import SEO from '../components/seo'
import Layout from '../containers/layout'
import {toPlainText} from '../lib/helpers'

export const query = graphql`
  query ProdutoTemplateQuery($id: String!) {
    produto: sanityProduto(id: {eq: $id}) {
      id
      publishedAt
      mainImage {
        ...SanityImage
        alt
      }
      nome
      price
      slug {
        current
      }
      _rawExcerpt(resolveReferences: {maxDepth: 5})
      _rawBody(resolveReferences: {maxDepth: 5})
    }
  }
`

const ProdutoTemplate = props => {
  const {data, errors} = props
  const produto = data && data.produto
  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {produto && <SEO title={produto.nome || 'Untitled'} description={toPlainText(produto._rawExcerpt)} image={produto.mainImage} />}

      {errors && (
        <Container>
          <GraphQLErrorList errors={errors} />
        </Container>
      )}

      {produto && <ProdutoPost {...produto} />}
    </Layout>
  )
}

export default ProdutoTemplate
