const ListFeed = ({ feed }) => {
  return (
    <>
      <section className="list-feed">
        <h1>Recent Lists</h1>
        {/* {feed ? <div>hello</div> : <div>feed is empty</div>} */}
        {feed
          ? feed.data.map((list) => (
              <div key={list.id} className="list">
                <p>{list.name}</p>
              </div>
            ))
          : null}
      </section>
    </>
  )
}

export default ListFeed
