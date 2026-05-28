import { useEffect, useMemo, useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
  address: {
    city: string;
  };
};

export function Leaderboard() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const [city, setCity] = useState("all");
  const cities = useMemo(() => {
    return [...new Set(users.map((user) => user.address.city))];
  }, [users]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const res = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data);
      }
      catch (err) {
        setError("Something went wrong...");
      }
      finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = useMemo(() => {
    let filtered = [...users];

    if (search) {
      filtered = filtered.filter(user =>
          user.name
            .toLowerCase()
            .includes(search.toLowerCase()) ||
          user.email
            .toLowerCase()
            .includes(search.toLowerCase())
      );
    }

    if (city !== "all") {
      filtered = filtered.filter(user => user.address.city === city);
    }

    filtered.sort((a, b) => {
      if (sort === "asc") return a.name.localeCompare(b.name);
      return b.name.localeCompare(a.name);
    });

    return filtered;
  }, [users, search, sort, city]);

  if (loading) {
    return (
      <div className="p-6 text-sm text-gray-500">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-sm text-red-500">
        {error}
      </div>
    );
  }

  return (
    <section className="min-h-full space-y-6 pr-6 py-6">
      <div className="flex flex-wrap gap-3">
        <input
        className="w-70 h-11 rounded-xl border border-gray-200 px-4 text-sm outline-none"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search by name or email..."
        />

        <select
        className="h-11 text-sm rounded-xl border border-gray-200 px-4 outline-none"
        onChange={(e) => setSort(e.target.value as "asc" | "desc")}
        value={sort}
        >
          <option value="asc">Name A-Z</option>
          <option value="desc">Name Z-A</option>
        </select>

        <select
        className="h-11 text-sm rounded-xl border border-gray-200 px-4 outline-none"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        >
          <option value="all">All Cities</option>

          {cities.map(city => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
        <table className="w-full border-collapse">
          <thead>
            <tr className="text-sm font-semibold text-gray-600 border-b border-gray-100 bg-gray-50">
              <th className="px-6 py-4 text-left">
                Name
              </th>
              <th className="px-6 py-4 text-left">
                Email
              </th>
              <th className="px-6 py-4 text-left">
                Company
              </th>
              <th className="px-6 py-4 text-left">
                City
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id} className="text-sm text-gray-700 border-b border-gray-50 transition hover:bg-gray-50">
                <td className="px-6 py-4">
                  {user.name}
                </td>
                <td className="px-6 py-4">
                  {user.email}
                </td>
                <td className="px-6 py-4">
                  {user.company.name}
                </td>
                <td className="px-6 py-4">
                  {user.address.city}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}