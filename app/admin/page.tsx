"use client";

import { useState } from "react";
import { useQuery, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useConvexReady } from "@/components/convex-provider";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Trash2, Download, Search, Users, Mail } from "lucide-react";

const ADMIN_PASSWORD = "eazy2025";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [search, setSearch] = useState("");
  const convexReady = useConvexReady();

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="w-full max-w-sm">
          <CardHeader>
            <CardTitle className="text-center">Admin Panel</CardTitle>
          </CardHeader>
          <CardContent>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (password === ADMIN_PASSWORD) {
                  setAuthenticated(true);
                } else {
                  alert("Noto'g'ri parol!");
                }
              }}
              className="space-y-4"
            >
              <Input
                type="password"
                placeholder="Parol kiriting"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" className="w-full">
                Kirish
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!convexReady) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Convex ulanmagan</p>
      </div>
    );
  }

  return <AdminDashboard search={search} setSearch={setSearch} />;
}

function AdminDashboard({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (s: string) => void;
}) {
  const entries = useQuery(api.waitlist.getAll);
  const removeMutation = useMutation(api.waitlist.remove);
  const [deleting, setDeleting] = useState<string | null>(null);

  if (!entries) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <p className="text-gray-500">Yuklanmoqda...</p>
      </div>
    );
  }

  const filtered = entries.filter((e) =>
    e.email.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = async (id: string) => {
    if (!confirm("Bu emailni o'chirmoqchimisiz?")) return;
    setDeleting(id);
    try {
      await removeMutation({ id: id as any });
    } finally {
      setDeleting(null);
    }
  };

  const handleExportCSV = () => {
    const csv = [
      "Email,Sana",
      ...entries.map(
        (e) =>
          `${e.email},${new Date(e.createdAt).toLocaleDateString("uz-UZ")}`
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `waitlist-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Waitlist Admin</h1>
          <Button
            variant="outline"
            size="sm"
            onClick={handleExportCSV}
            disabled={entries.length === 0}
          >
            <Download className="w-4 h-4 mr-2" />
            CSV yuklab olish
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Users className="w-8 h-8 text-brand" />
              <div>
                <p className="text-2xl font-bold">{entries.length}</p>
                <p className="text-sm text-gray-500">Jami ro'yxatda</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="flex items-center gap-3 p-4">
              <Mail className="w-8 h-8 text-blue-500" />
              <div>
                <p className="text-2xl font-bold">
                  {entries.length > 0
                    ? new Date(entries[0].createdAt).toLocaleDateString("uz-UZ")
                    : "—"}
                </p>
                <p className="text-sm text-gray-500">Oxirgi qo'shilgan</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Email qidirish..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>

        <Card>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-12">#</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Sana</TableHead>
                  <TableHead className="w-16"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow>
                    <TableCell colSpan={4} className="text-center py-8 text-gray-400">
                      {search ? "Natija topilmadi" : "Hali hech kim qo'shilmagan"}
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((entry, i) => (
                    <TableRow key={entry.id}>
                      <TableCell className="text-gray-400">{i + 1}</TableCell>
                      <TableCell className="font-medium">{entry.email}</TableCell>
                      <TableCell className="text-gray-500">
                        {new Date(entry.createdAt).toLocaleString("uz-UZ")}
                      </TableCell>
                      <TableCell>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleDelete(entry.id)}
                          disabled={deleting === entry.id}
                          className="text-red-400 hover:text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
