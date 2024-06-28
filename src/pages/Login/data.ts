import { redirect, ActionFunctionArgs } from "react-router-dom";
import axios from "axios";

export async function action({ request }: ActionFunctionArgs) {
  let formData = await request.formData();
  if (formData.get("submitbtn") === "deception") {
    return redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  }
  // TODO: request to backend to obtain the discord loggin oauth ur
  const callback = location.origin + '/discord-authorized'
  const auth_url = await axios.get(`/api/auth/discord-auth-url?callback=${callback}`)
  return redirect(auth_url.data.url);
}

