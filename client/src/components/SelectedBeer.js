const SelectedBeer = ({ toggle }) => {
  return (
    <>
      <section>
        {toggle ? null : (
          <div>
            <p>Select a beer for more info!</p>
          </div>
        )}
      </section>
    </>
  )
}

export default SelectedBeer
