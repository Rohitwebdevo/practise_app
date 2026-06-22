import React from 'react'

type PostItem = {
  id: number
  title: string
  body: string
}

type ListAPIPageProps = {
  data: PostItem[]
}

const ListAPIPage: React.FC<ListAPIPageProps> = ({ data }) => {
  return (
    <div className="api-list">
      {data.length === 0 ? (
        <p className="empty-row">No posts match your search.</p>
      ) : (
        data.map((item) => (
          <article key={item.id} className="api-item">
            <h3 className="api-title">{item.title}</h3>
            <p className="api-body">{item.body}</p>
          </article>
        ))
      )}
    </div>
  )
}

export default ListAPIPage
