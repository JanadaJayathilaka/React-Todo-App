import ItemList from "./ItemList";

function Content({ items, handleCheck, handleDelete }) {
  return (
    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        // <p style={{ marginTop: "2rem" }} Your list is empty />
        <p
          style={{
            height: "100%",
            display: "grid",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Your list is empty
        </p>
      )}
    </main>
  );
}

export default Content;
