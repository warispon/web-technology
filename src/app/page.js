
export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "4rem",
        fontFamily: "Georgia, 'Times New Roman', serif",
      }}
    >
      <h1 style={{ fontSize: "64px", fontWeight: 800, marginBottom: "16px" }}>
        Todo List App
      </h1>

      <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
        <input
          type="text"
          placeholder="Enter a new task.."
          style={{
            border: "1px solid #ccc",
            borderRadius: 4,
            padding: "8px 12px",
            width: 320,
            outline: "none",
          }}
          readOnly
        />
        <button
          style={{
            border: "1px solid #888",
            borderRadius: 4,
            padding: "8px 14px",
            background: "transparent",
            cursor: "default",
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "disc", paddingLeft: "24px", fontSize: "28px", lineHeight: 1.6 }}>
        <li>
          <label>
            <input type="checkbox" /> <span>Sleep</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" defaultChecked />{" "}
            <span style={{ textDecoration: "line-through" }}>Join React class</span>
          </label>
        </li>
        <li>
          <label>
            <input type="checkbox" /> <span>Do react homework</span>
          </label>
        </li>
      </ul>
    </main>
  );
}
