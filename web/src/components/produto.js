import {format, distanceInWords, differenceInDays} from 'date-fns'
import React from 'react'
import {buildImageObj} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'
import Container from './container'

import styles from './produto.module.css'

function ProdutoPost (props) {
  const {_rawBody, nome, mainImage, publishedAt, price} = props
  return (
    <article className={styles.root}>
      
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
          {mainImage && mainImage.asset && (
        <div className={styles.mainImage}>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
              .width(1200)
              .height(Math.floor((9 / 16) * 1200))
              .fit('crop')
              .auto('format')
              .url()}
            alt={mainImage.alt}
          />
        </div>
      )}
            
          </div>
          <aside className={styles.metaContent}>
          <h1 className={styles.title}>{nome}</h1>
            {_rawBody && <PortableText blocks={_rawBody} />}
          <p>Preço: R$ {price.toLocaleString('pt-br', {minimumFractionDigits: 2})}</p>
            {publishedAt && (
              <div className={styles.publishedAt}>
                {differenceInDays(new Date(publishedAt), new Date()) > 3
                  ? distanceInWords(new Date(publishedAt), new Date())
                  : format(new Date(publishedAt), 'MMMM Do, YYYY')}
              </div>
            )}
          </aside>
        </div>
      </Container>
    </article>
  )
}

export default ProdutoPost
