import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'
import Layout from '../containers/layout'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query LivroPageQuery {
    sanityProduto(slug: {current: {eq: "livro"}}) {
      nome
    }
  }
`

const LivroPage = props => {
  const {data, errors} = props
  const {nome} = data.sanityProduto

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  return (
    <Layout>
      <SEO title={nome} />
      <Container>
        <h1 className={responsiveTitle1}>{nome}</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </Container>
    </Layout>
  )
}

export default LivroPage
