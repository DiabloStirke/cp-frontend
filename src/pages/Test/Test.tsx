import { Form } from "react-router-dom";


export async function action() {
  console.log("Test action");
  return { error: "Test error" };
}

export default function Test() {
  return (
    <div>
      <h1>Test page</h1>
      <Form method="POST">
        <button type="submit">Tets action</button>
      </Form>
    </div>
  );
}
