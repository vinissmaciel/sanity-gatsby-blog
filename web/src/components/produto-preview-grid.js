import {Link} from 'gatsby'
import React from 'react'
import ProdutoPreview from './produto-preview'

import styles from './blog-post-preview-grid.module.css'

function ProdutoPreviewGrid (props) {
  return (
    <div className={styles.root}>
      {props.nome && <h2 className={styles.headline}>{props.nome}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProdutoPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
}

ProdutoPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default ProdutoPreviewGrid
