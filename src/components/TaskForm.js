import { useRef, useState } from "react";

function TaskForm({ addTask }) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = input.trim();

    if (!title) {
      inputRef.current.focus();
      return;
    }

    addTask(title);
    setInput("");
    inputRef.current.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        padding: "20px",
        borderBottom: "1px solid #ccc",
      }}
    >
      <input
        ref={inputRef}
        type="text"
        value={input}
        placeholder="Nhập tên công việc..."
        onChange={(e) => setInput(e.target.value)}
        style={{ width: "400px", padding: "10px", fontSize: "16px" }}
      />
      <button type="submit" style={{ padding: "10px 25px", fontSize: "16px" }}>
        Thêm
      </button>
    </form>
  );
}

export default TaskForm;