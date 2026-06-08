import { MOCK_CREDENTIALS } from "../config";

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

const MOCK_ADMIN = {
  id: "admin_1",
  name: "Emmanuel Dey",
  email: MOCK_CREDENTIALS.email,
  role: "SUPER_ADMIN", // SUPER_ADMIN | ADMIN | EDITOR
};

export async function mockLogin(email, password) {
  await delay(600);
  if (email === MOCK_CREDENTIALS.email && password === MOCK_CREDENTIALS.password) {
    localStorage.setItem("voima_mock_admin", JSON.stringify(MOCK_ADMIN));
    localStorage.setItem("voima_access_token", "mock-token");
    return MOCK_ADMIN;
  }
  throw { response: { data: { message: "Invalid email or password" } } };
}

export async function mockMe() {
  await delay(200);
  const raw = localStorage.getItem("voima_mock_admin");
  if (!raw) throw new Error("No session");
  return JSON.parse(raw);
}

export async function mockLogout() {
  await delay(150);
  localStorage.removeItem("voima_mock_admin");
  localStorage.removeItem("voima_access_token");
}