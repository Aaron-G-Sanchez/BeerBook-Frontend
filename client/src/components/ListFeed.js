const ListFeed = ({ feed }) => {
  return (
    <>
      <section className="list-feed">
        <h2>Recent Lists</h2>

        {feed
          ? feed.data.map((list) => (
              <div key={list.id} className="list">
                <p className="list-name">{list.name}</p>
                <p>{list.User.name}</p>
              </div>
            ))
          : null}
      </section>
    </>
  )
}

export default ListFeed
