import { MemoryRouter, Outlet, Route, Routes } from "react-router";

export default function MockRouterContext({ context, children }) {
  return (
    <MemoryRouter>
      <Routes>
        <Route path="/" element={<Outlet context={context} />}>
          <Route index element={children} />
        </Route>
      </Routes>
    </MemoryRouter>
  );
}
